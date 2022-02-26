// const axios = require("axios");
const { check, validationResult } = require("express-validator");
const { Router } = require("express");
const config = require("config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const checkAuth = require("../middleware/auth.middleware");
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

      // console.log("email, password: ", email, password);

      if (isUser) {
        return res.status(400).json({ message: "Email is already used" });
      }

      const hashedPassword = await bcrypt.hash(password, 12);

      const user = new User({ email, password: hashedPassword });

      // console.log(user);

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

      // console.log(user);

      if (!user) {
        return res
          .status(400)
          .json({ message: "Incorrect login data! Try again!" });
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

      res.json({
        user: {
          token,
          userID: user._id,
          userName: user._doc.userName,
          avatarURL: user._doc.avatarURL,
          created: user._doc.created,
        },
        status: 201,
        message: "User has been authorized",
      });
      //
    } catch (e) {
      res.status(500).json({ message: "Something went wrong, try again" });
    }
  }
);

router.post("/update", checkAuth, async (req, res) => {
  try {
    const { userName, avatarURL } = req.body;

    const user = await User.findById(req.user.userID);

    user.userName = userName;
    user.avatarURL = avatarURL;

    await user.save();

    res.json({
      user: {
        token: req.user.token,
        userID: user._id,
        userName: user._doc.userName,
        avatarURL: user._doc.avatarURL,
        created: user._doc.created,
      },
      status: 201,
      message: "User has been updated",
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong, try again" });
  }
});

router.get("/getuser/:userId", checkAuth, async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId);
    const basicUser = { userName: user.userName, avatarURL: user.avatarURL };

    res.json({ status: 201, basicUser, message: "User exists" });
    //
  } catch (error) {
    res.status(500).json({ message: "Something went wrong, try again" });
  }
});

module.exports = router;
