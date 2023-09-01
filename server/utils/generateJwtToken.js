import jwt from "jsonwebtoken";

export const generateJwtToken = (res, userId) => {
  const token = jwt.sign({userId}, process.env.JWT_SECRET, {
    expiresIn: '1d'
  });

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
    maxAge: 1000 * 60 * 60 * 24 * 30
  })
}
