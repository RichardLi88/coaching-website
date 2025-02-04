import jwt from "jsonwebtoken";

export function generateAccessToken(user) {
  return jwt.sign(
    {
      id: user._id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "15m",
    }
  );
}

export function generateRefreshToken(user) {
  return jwt.sign(
    {
      id: user._id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: "7d",
    }
  );
}

export async function verify(req, res, next) {
  jwt.verify(
    req.cookies.accessToken,
    process.env.ACCESS_TOKEN_SECRET,
    (err, user) => {
      if (err) {
        console.log(err);
        res.status(400).json({ success: false, error: "Not authorised" });
      } else {
        req.user = user;
        next();
      }
    }
  );
}
