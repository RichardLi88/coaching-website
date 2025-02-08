import jwt from "jsonwebtoken";
import User from "../schemas/user.js";

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

export function verify(req, res, next) {
  if (!req.cookies.accessToken && !req.cookies.refreshToken) {
    return res.status(400).json({ success: false, data: "not signed in" });
  }
  jwt.verify(
    req.cookies.accessToken,
    process.env.ACCESS_TOKEN_SECRET,
    async (err, user) => {
      if (err) {
        const result = await renewToken(req, res);
        if (result) {
          next();
        } else {
          return res
            .status(400)
            .json({ success: false, error: "Not authorised" });
        }
      } else {
        req.user = user;
        next();
      }
    }
  );
}

async function renewToken(req, res) {
  if (!req.cookies.refreshToken) {
    return false;
  }

  try {
    const payload = jwt.verify(
      req.cookies.refreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(payload.id);
    if (!user) {
      return false;
    }
    const accessToken = generateAccessToken(user);

    res.cookie("accessToken", accessToken, {
      maxAge: 15 * 60 * 1000,
      httpOnly: true,
    });

    req.user = payload;
    return true;
  } catch (err) {
    console.log(err.message);
    return false;
  }
}

export async function adminVerify(req, res, next) {
  if (req.user.isAdmin) {
    next();
  } else {
    return res
      .status(400)
      .json({ success: false, message: "Members are not authorised." });
  }
}
