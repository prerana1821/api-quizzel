const express = require('express');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const { UserCredential } = require("../models/user-credentials.model");
const jwtSecret = process.env['jwt-secret'];

const findUserByUserName = async (username) => {
  try {
    const user = await UserCredential.findOne({ username: username }).exec();
    return user;
  } catch (error) {
    console.log(error);
  }
}

const generateToken = (userId) => {
  return jwt.sign({ userId }, jwtSecret, { expiresIn: '24h' });
}

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await findUserByUserName(username);
    if (user) {
      const validPassword = await bcrypt.compare(password, user.password);
      if (validPassword) {
        const token = generateToken(user._id);
        return res.status(200).json({ user: { ...user._doc, token }, success: true, message: "Sign Up Successful" });
      } else {
        return res.status(400).json({ success: false, message: "Invalid Password. Enter correct password" });
      }
    } return res.status(401).json({ success: false, message: "User not found. Check your user credentials" })
  } catch (error) {
    res.status(500).json({
      success: false,
      errorMessage: error.message,
    });
  }
})

router.post('/signup', async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const user = await findUserByUserName(username);
    if (!user) {
      const NewUser = new UserCredential({ username, password, email });
      const salt = await bcrypt.genSalt(10);
      NewUser.password = await bcrypt.hash(NewUser.password, salt);
      const savedUser = await NewUser.save();
      const token = generateToken(savedUser._id);
      return res.status(201).json({ user: { ...savedUser._doc, token }, success: true, message: "Sign Up Successful" })
    } else {
      return res.status(403).json({ success: false, message: "User Already Exists" })
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      errorMessage: error.message,
    });
  }
});


module.exports = router;