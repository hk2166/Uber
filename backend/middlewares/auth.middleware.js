const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const blacklistTokenModel = require("../models/blacklistToken.model");
const bcrypt = require("bcrypt");
const captainModel = require("../models/captain.model");

module.exports.authUser = async (req, res, next) => {
  try {
    // Extract token from Authorization header (Bearer token) or cookies
    const authHeader = req.headers.authorization;
    const token =
      req.cookies?.token || (authHeader && authHeader.split(" ")[1]);

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
      return res
        .status(401)
        .json({ message: "Token has been blacklisted. Please login again." });
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

module.exports.authCaptain = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Authentication required. Please provide a valid token",
      });
    }

    const token = authHeader.split(" ")[1];

    // Check if token is blacklisted
    const isBlacklisted = await blacklistTokenModel.findOne({ token });
    if (isBlacklisted) {
      return res.status(401).json({
        success: false,
        message: "Token has been invalidated. Please login again",
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Get captain details
    const captain = await captainModel.findById(decoded._id);
    if (!captain) {
      return res.status(404).json({
        success: false,
        message: "Captain not found",
      });
    }

    // Attach captain to request
    req.captain = captain;
    req.token = token;
    next();
  } catch (error) {
    console.error("Auth middleware error:", error);
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};
