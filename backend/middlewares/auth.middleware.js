const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const blacklistTokenModel = require("../models/blacklistToken.model");
const bcrypt = require("bcrypt");

module.exports.authUser = async (req, res, next) => {
  try {
    // Extract token from Authorization header (Bearer token) or cookies
    const authHeader = req.headers.authorization;
    const token = req.cookies?.token || (authHeader && authHeader.split(" ")[1]);

    console.log("Authorization Header:", authHeader);
    console.log("Extracted Token:", token);

    if (!token) {
      console.log("Missing or improperly formatted token");
      return res.status(400).json({ message: "Invalid or missing auth token" });
    }

    // Check if token has been blacklisted (logged out)
    const isBlacklisted = await blacklistTokenModel.findOne({ token });
    if (isBlacklisted) {
      console.log("Blacklisted token detected");
      return res.status(401).json({ message: "Token has been blacklisted. Please login again." });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token:", decoded);

    // Fetch user from database
    const user = await userModel.findById(decoded._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Attach user to request
    req.user = user;
    next();

  } catch (err) {
    console.error("JWT Verification Error:", err);
    return res.status(400).json({ message: "Invalid or expired token" });
  }
};