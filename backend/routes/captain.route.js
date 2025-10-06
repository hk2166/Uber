const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const captainController = require("../controllers/captain.controller");
const authMiddleware = require("../middlewares/auth.middleware");

// Register route
router.post(
  "/register",
  [
    body("fullname.firstName")
      .trim()
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
    body("fullname.lastName")
      .trim()
      .isLength({ min: 3 })
      .withMessage("Last name must be at least 3 characters long"),
    body("email").trim().isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    body("phoneNumber")
      .matches(/^[0-9]{10}$/)
      .withMessage("Invalid phone number"),
    body("vehicle.color")
      .trim()
      .isLength({ min: 3 })
      .withMessage("Vehicle color must be at least 3 characters long"),
    body("vehicle.plate")
      .trim()
      .notEmpty()
      .withMessage("Vehicle plate is required"),
    body("vehicle.capacity")
      .isInt({ min: 1 })
      .withMessage("Vehicle capacity must be at least 1"),
    body("vehicle.vehicleType")
      .isIn(["motorcycle", "car", "auto"])
      .withMessage("Invalid vehicle type"),
  ],
  captainController.registerCaptain
);

// Login route
router.post(
  "/login",
  [
    body("email")
      .exists()
      .withMessage("Email is required")
      .notEmpty()
      .withMessage("Email cannot be empty")
      .isEmail()
      .withMessage("Invalid email format")
      .trim(),
    body("password")
      .exists()
      .withMessage("Password is required")
      .notEmpty()
      .withMessage("Password cannot be empty")
      .trim(),
  ],
  captainController.loginCaptain
);

// Protected routes
router.get(
  "/profile",
  authMiddleware.authCaptain,
  captainController.getCaptainProfile
);
router.get(
  "/logout",
  authMiddleware.authCaptain,
  captainController.logoutCaptain
);

module.exports = router;
