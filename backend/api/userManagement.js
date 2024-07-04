const User = require("../models/userSchema");

const userRegistration = async (res, req) => {
    console.log(req.body);
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ error: "Please provide email and password." });
  }

  try {
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ error: "You already have an account." });
    }

    const newUser = new User({ email, password });
    const registeredUser = await newUser.save();

    console.log(registeredUser);

    return res.status(201).json({ registeredUser });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateUserDetails = async (res, req) => {};

const deleteUser = async (res, req) => {};

module.exports = { userRegistration }