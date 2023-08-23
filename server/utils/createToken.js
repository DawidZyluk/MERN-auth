import Token from "../models/tokenModel.js";
import crypto from "crypto";
import bcrypt from "bcryptjs";

export const createToken = async (userId,type) => {
  const token = await Token.findOne({ userId: userId });
  if (token) await token.deleteOne();

  const newToken = crypto.randomBytes(32).toString("hex");

  const salt = await bcrypt.genSalt(10);
  const hashedToken = await bcrypt.hash(newToken, salt);

  await Token.create({
    userId: userId,
    type: type,
    token: hashedToken,
    createdAt: Date.now(),
  });

  return newToken;
}