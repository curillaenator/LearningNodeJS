// const axios = require("axios");
const { check, validationResult } = require("express-validator");
const { Router } = require("express");
const config = require("config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const router = Router();

router.post(
  "/register",
  [
    check("email", "Некорректный email").isEmail(),
    check("password", "Минимум 8 символов").isLength({ min: 8 }),
  ],
  async (req, res) => {
    console.log("Body: ", req.body);

    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        res.status(400).json({
          errors: errors.array(),
          message: "Invalid registration data",
        });
      }

      const { email, password } = req.body;

      const isUser = await User.findOne({ email });

      console.log("is user: ", isUser);

      if (isUser) {
        return res.status(400).json({ message: "Email is already used" });
      }

      const hashedPassword = await bcrypt.hash(password, 12);

      const user = new User({ email, password: hashedPassword });

      await user.save();

      res
        .status(201)
        .json({ status: 201, message: "User created, please sign in!" });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong, try again" });
    }
  }
);

router.post(
  "/login",
  [
    check("email", "Введите корректный email").normalizeEmail().isEmail(),
    check("password", "Введите пароль").exists(),
  ],
  async (req, res) => {
    console.log("Body: ", req.body);

    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        res
          .status(400)
          .json({ errors: errors.array(), message: "Invalid login data" });
      }

      const { email, password } = req.body;

      const user = await User.findOne({ email });

      console.log(user);

      if (!user) {
        return res.status(400).json({ message: "Try again" });
      }

      const isPasswordMatch = await bcrypt.compare(password, user.password);

      if (!isPasswordMatch) {
        return res.status(400).json({ message: "Invalid login data" });
      }

      const token = jwt.sign(
        { userID: user.id, email: user.email },
        config.get("jwtKey"),
        { expiresIn: "1h" }
      );

      res.json({ token, userID: user._id });
      //
    } catch (e) {
      res.status(500).json({ message: "Something went wrong, try again" });
    }
  }
);

module.exports = router;
