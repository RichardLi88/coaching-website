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
        if (renewToken(req, res)) {
          next();
        } else {
          res.status(400).json({ success: false, error: "Not authorised" });
        }
      } else {
        req.user = user;
        next();
      }
    }
  );
}

function renewToken(req, res) {
  let validRefreshToken = false;
  if (req.cookies.refreshToken) {
    jwt.verify(
      req.cookies.refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, user) => {
        if (err) {
          return res.json({ success: false, error: err.message });
        } else {
          const accessToken = generateAccessToken(user);
          res.cookie("accessToken", accessToken, {
            maxAge: 15 * 60 * 1000,
            httpOnly: true,
          });
          req.user = user;
          validRefreshToken = true;
        }
      }
    );
  }
  return validRefreshToken;
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
