import User from "../schemas/user.js";

export const signUp = async (req, res) => {
  const data = req.body;
  if (
    !data.username ||
    !data.email ||
    !data.password ||
    !data.confirmPassword
  ) {
    return res.status(400).json({ error: "fill in all details" });
  }
  if (data.password !== data.confirmPassword) {
    return res.status(400).json({ error: "passwords do not match" });
  }

  const user = await User.findOne({ username: data.username });

  if (user) {
    return res.status(400).json({ message: "User already exists" });
  }

  const newUser = new User(data);
  newUser.save();
  res.status(200).json({ success: true, data: newUser });
};
