import User from "../schemas/user.js";
import bcrypt from "bcrypt";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utility/jwtAuth.js";
import RefreshToken from "../schemas/refreshToken.js";

export const signUp = async (req, res) => {
  /*
  backend function used to register details after validation including hashing password with bcrypt
  */
  const data = req.body;

  try {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = {
      username: data.username,
      firstname: data.firstname,
      lastname: data.lastname,
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
    res.status(500).json({ success: false, data: err.message });
  }
};

export const validateSignUp = async (req, res, then) => {
  //validation of details
  const data = req.body;
  let valid = true;
  let reason = "Valid data";
  if (
    !data.username ||
    !data.firstname ||
    !data.lastname ||
    !data.email ||
    !data.password ||
    !data.confirmPassword
  ) {
    valid = false;
    reason = "fill in all details";
  } else if (data.password !== data.confirmPassword) {
    valid = false;
    reason = "passwords do not match";
  }

  if (!valid) {
    return res.status(400).json({ success: valid, data: reason });
  }
  //checking if there already exists the username
  try {
    const user = await User.findOne({ username: data.username });
    if (user) {
      valid = false;
      reason = "username already taken";
      return res.status(400).json({ success: valid, data: reason });
    }
  } catch (err) {
    console.log(`error trying to retrieve data from database ${err.message}`);
    return res.status(500).json({ success: false, data: err.message });
  }
  then();
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
        .json({ success: false, data: "unable to find user" });
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

      const { password, ...returnUser } = user.toObject();
      return res.status(200).json({ success: true, data: returnUser });
    } else {
      return res
        .status(400)
        .json({ success: false, data: "passwords dont match" });
    }
  } catch (err) {
    console.log("here");
    return res.status(500).json({ success: false, data: err.message });
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
    const result = await RefreshToken.deleteMany({
      username: req.user.username,
    });
    res.status(200).json({ success: true, reason: "logged out successfully" });
  } catch (err) {
    res.status(500).json({ success: false, data: err.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ success: false, data: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = req.user;
    const id = req.params.id;
    if (user.id === id || user.isAdmin) {
      const result = await User.findByIdAndDelete(id);
      return res.status(200).json({ success: true, data: result });
    }
    return res
      .status(400)
      .json({ success: false, data: "not authorised to remove user" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, data: err.message });
  }
};
