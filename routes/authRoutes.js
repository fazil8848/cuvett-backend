const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  registerCompany,
  login,
  verifyOtp,
  sendOTP,
} = require("../controller/authController");

const router = express.Router();

router.post("/verify_otp", verifyOtp);
router.post("/sendOTP", sendOTP);
router.post("/register", registerCompany);
router.post("/login", login);

module.exports = router;
