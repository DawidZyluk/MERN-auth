import { asyncHandler } from "../utils/asyncHandler.js";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { generateToken } from "../utils/generateToken.js";
import { json } from "express";
import resetToken from "../models/resetToken.js";
import { sendEmail } from "../utils/sendEmail.js";

export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
});

export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
    sendEmail(
      email,
      "Welcome to MERN-auth",
      { name: user.name, url: process.env.CLIENT_URL },
      "/server/templates/welcome.ejs"
    );
  } else {
    res.status(400).json({ message: "Invalid user data" });
  }
});

export const requestPasswordReset = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user)
    return res.status(400).json({ message: "No account with this email" });

  const token = await resetToken.findOne({ userId: user._id });
  if (token) await token.deleteOne();

  const newToken = crypto.randomBytes(32).toString("hex");

  const salt = await bcrypt.genSalt(10);
  const hashedToken = await bcrypt.hash(newToken, salt);

  await resetToken.create({
    userId: user._id,
    token: hashedToken,
    createdAt: Date.now(),
  });
  const link = `${process.env.CLIENT_URL}passwordReset?token=${newToken}&id=${user._id}`;

  sendEmail(
    email,
    "Password reset request",
    { name: user.name, url: link },
    "/server/templates/requestResetPassword.ejs"
  );
  res.status(200).json({ message: "Email sent" });
});

export const resetPassword = asyncHandler(async (req, res) => {
  const { userId, token, password } = req.body;

  let passwordResetToken = await resetToken.findOne({ userId });
  if (!passwordResetToken)
    return res
      .status(400)
      .json({ message: "Invalid or expired password reset token" });

  const isValid = await bcrypt.compare(token, passwordResetToken.token);
  if (!isValid)
    return res
      .status(400)
      .json({ message: "Invalid or expired password reset token" });

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  await User.updateOne(
    { _id: userId },
    { $set: { password: hashPassword } },
    { new: true }
  );

  const updatedUser = await User.findById({ _id: userId });
  sendEmail(
    updatedUser.email,
    "Password Reset Successfully",
    {
      name: updatedUser.name,
      url: process.env.CLIENT_URL
    },
    "/server/templates/resetPassword.ejs"
  );

  await passwordResetToken.deleteOne();
  res.status(200).json({ message: "Password changed!" });
});

export const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "User logged out" });
});

export const getUserProfile = asyncHandler(async (req, res) => {
  const user = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  };

  res.status(200).json(user);
});

export const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updateUser = await user.save();

    res.status(200).json({
      _id: updateUser._id,
      name: updateUser.name,
      email: updateUser.email,
    });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});
