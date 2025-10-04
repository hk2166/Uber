const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");
const blacklistTokenModel = require("../models/blacklistToken.model");

module.exports.registerUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log(req.body);

    const { fullname, email, password } = req.body;

    const hashPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
      firstname: fullname.firstName,
      lastname: fullname.lastName,
      email,
      password: hashPassword,
    });

    const token = user.generateAuthToken();

    const userObj = user.toObject ? user.toObject() : { ...user };
    delete userObj.password;

    res.status(201).json({ user: userObj, token });
  } catch (err) {
    if (next) return next(err);
    return res.status(500).json({ message: "Registration failed" });
  }
};


module.exports.loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {email,password} = req.body;

  const user = await userModel.findOne({email}).select('+password'); // +password is used for getting password as per the user model by default password in not selected on default so +password is used to select password

  if(!user){
    return res.status(400).json({message:"Invalid email or password"});
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch){
    return res.status(401).json({message:"Invalid email or password"});
  }

  const token = user.generateAuthToken();

  res.cookie("token",token);

  res.status(200).json({ token,user});
};

module.exports.getUserProfile = async (req, res, next) => {
  res.status(200).json({ user: req.user });
};

module.exports.logoutUser = async (req, res, next) => {
  res.clearCookie("token");
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];
  if(!token){
    return res.status(400).json({message:"Invalid or missing auth token"});
  }
  await blacklistTokenModel.create({token});
  res.status(200).json({ message: "Logged out successfully" });
};