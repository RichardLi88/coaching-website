import User from "../schemas/user.js";
import bcrypt from "bcrypt";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utility/jwtAuth.js";
import RefreshToken from "../schemas/refreshToken.js";

export const signUp = async (req, res, then) => {
  /*
  backend function used to validate details, and then register the account to the database
  */
  //validation of details
  const data = req.body;
  if (
    !data.username ||
    !data.email ||
    !data.password ||
    !data.confirmPassword
  ) {
    return res
      .status(400)
      .json({ success: false, reason: "fill in all details" });
  }
  if (data.password !== data.confirmPassword) {
    return res
      .status(400)
      .json({ success: false, reason: "passwords do not match" });
  }

  //checking if there already exists the username
  try {
    const user = await User.findOne({ username: data.username });

    if (user) {
      return res
        .status(400)
        .json({ success: false, reason: "Username is taken" });
    }
  } catch (err) {
    console.log(`error trying to retrieve data from database ${err.message}`);
    return res.status(500).json({ success: false, error: err.message });
  }

  //password hashing using bcrypt
  try {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = {
      username: data.username,
      password: hashedPassword,
      email: data.email,
      isAdmin: false,
    };
    const newUser = new User(user);
    await newUser.save();

    const { password, ...returnedUser } = newUser.toObject();

    res.status(200).json({
      success: true,
      data: returnedUser,
    });
  } catch (err) {
    console.log(`Error when hashing password: ${err.message}`);
    res.status(500).json({ success: false, error: err.message });
  }
};

export const login = async (req, res) => {
  /*
  backend function used to validate details, then if valid, generate access and response token and log the user in.
  */
  const data = req.body;

  //fetching from database
  try {
    const user = await User.findOne({ username: data.username });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, reason: "unable to find user" });
    }
    //validating password
    const passwordMatch = await bcrypt.compare(data.password, user.password);
    if (passwordMatch) {
      //removing old refresh token from db
      if (req.cookies.refreshToken) {
        RefreshToken.findOneAndDelete({ username: user.username });
      }
      //generating new access and refresh token
      const accessToken = generateAccessToken(user);
      const refreshToken = generateRefreshToken(user);

      res.cookie("accessToken", accessToken, {
        maxAge: 15 * 60 * 1000,
        httpOnly: true,
      });

      res.cookie("refreshToken", refreshToken, {
        maxAge: 60 * 60 * 1000 * 24 * 7,
        httpOnly: true,
      });

      //storing new refresh token to db
      const refreshTokenObject = {
        username: user.username,
        token: refreshToken,
      };

      const newRefreshToken = RefreshToken(refreshTokenObject);
      await newRefreshToken.save();

      return res.status(200).json({ success: true });
    } else {
      return res
        .status(400)
        .json({ success: false, reason: "passwords dont match" });
    }
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
};

export const logout = async (req, res) => {
  /*
  backend function to log the user out by removing the access and refresh tokens from the cookies, and remove the refreshtoken from database.
  */
  try {
    res.cookie("accessToken", "", { maxAge: 1 });
    res.cookie("refreshToken", "", { maxAge: 1 });
    //removing refresh token
    if (req.cookies.refreshToken) {
      RefreshToken.findOneAndDelete({ token: req.cookies.refreshToken });
      res
        .status(200)
        .json({ success: true, reason: "logged out successfully" });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
