import jwt from "jsonwebtoken";

export function generateAccessToken(user) {
  return jwt.sign(
    { id: user._id, isAdmin: user.isAdmin },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "15m",
    }
  );
}

export function generateRefreshToken(user) {
  return jwt.sign(
    { id: user._id, isAdmin: user.isAdmin },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: "7d",
    }
  );
}
