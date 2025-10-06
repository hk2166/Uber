const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const blacklistTokenModel = require("../models/blacklistToken.model");
const { validationResult } = require("express-validator");

module.exports.registerCaptain = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password, vehicle, phoneNumber, status } =
      req.body;

    const isCaptainExist = await captainModel.findOne({ email });
    if (isCaptainExist) {
      return res
        .status(400)
        .json({ message: "Captain with this email already exists" });
    }

    const hashPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
      firstName: fullname.firstName,
      lastName: fullname.lastName,
      email,
      password: hashPassword,
      phoneNumber,
      status,
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
    });

    const token = captain.generateAuthToken();
    res.status(201).json({ captain, token });
  } catch (error) {
    next(error);
  }
};

module.exports.loginCaptain = async (req, res, next) => {
  try {
    // Log the request body for debugging
    console.log("Login request body:", req.body);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const { email, password } = req.body;

    // Find captain
    const captain = await captainModel.findOne({ email }).select("+password");
    if (!captain) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Check password
    const isPasswordValid = await captain.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Generate token
    const token = captain.generateAuthToken();

    // Remove password from response
    captain.password = undefined;

    res.status(200).json({
      success: true,
      token,
      captain,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports.getCaptainProfile = async (req, res) => {
  try {
    const captain = req.captain;

    if (!captain) {
      return res.status(404).json({
        success: false,
        message: "Captain not found",
      });
    }

    res.status(200).json({
      success: true,
      captain,
    });
  } catch (error) {
    console.error("Get profile error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports.logoutCaptain = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "No token provided",
      });
    }

    const token = authHeader.split(" ")[1];

    // Add debug logging
    console.log("Token to blacklist:", token);

    // Check if token is already blacklisted
    const existingToken = await blacklistTokenModel.findOne({ token });
    if (existingToken) {
      return res.status(400).json({
        success: false,
        message: "Token already invalidated",
      });
    }

    // Add token to blacklist
    await blacklistTokenModel.create({
      token,
      createdAt: new Date(),
    });

    // Clear cookie if using cookies
    if (req.cookies && req.cookies.token) {
      res.clearCookie("token");
    }

    res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    console.error("Logout error details:", error);
    res.status(500).json({
      success: false,
      message: "Error during logout",
      error: error.message,
    });
  }
};
