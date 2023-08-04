import { asyncHandler } from "../utils/asyncHandler.js";
import User from "../models/userModel.js";

export const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth user" });
});

export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
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
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

export const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "logout user" });
});

export const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User Profile" });
});

export const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update Profile" });
});
