const { check, validationResult } = require("express-validator");
const { Router } = require("express");
const config = require("config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const router = Router();

const errMsgs = {
  common: "Что-то пошло не так, попробуйте снова",

  userAlreadyExists: "Пользователь с таким email уже существует",
  userCreated: "Пользователь создан",
  invalidRegCreds: "Некорректные данные для регистрации",

  userNotExists: "Попробуйте еще раз",
  invalidLoginCreds: "Некорректные данные при входе в систему",
  invalidPassword: "Неверные данные для входа",
};

router.post(
  "/register",
  [
    check("email", "Некорректный email").isEmail(),
    check("password", "Минимум 8 символов").isLength({ min: 8 }),
  ],
  async (req, res) => {
    console.log("BODY", req.body);

    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        res
          .status(400)
          .json({ errors: errors.array(), message: errMsgs.invalidRegCreds });
      }

      const { email, password } = req.body;

      const isUserExists = await User.findOne({ email });

      if (isUserExists) {
        return res.status(400).json({ message: errMsgs.userAlreadyExists });
      }

      const hashedPassword = await bcrypt.hash(password, 12);

      const user = new User({ email, password: hashedPassword });

      console.log(user);

      await user.save();

      res.status(201).json({ message: errMsgs.userCreated });
    } catch (e) {
      res.status(500).json({ message: errMsgs.common });
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
    console.log("BODY", req.body);

    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        res
          .status(400)
          .json({ errors: errors.array(), message: errMsgs.invalidLoginCreds });
      }

      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: errMsgs.userNotExists });
      }

      const isPasswordMatch = await bcrypt.compare(password, user.password);

      if (!isPasswordMatch) {
        return res.status(400).json({ message: errMsgs.invalidPassword });
      }

      const token = jwt.sign(
        { userID: user.id, email: user.email },
        config.get("jwtKey"),
        { expiresIn: "1h" }
      );

      res.json({ token, userID: user.id });
      //
    } catch (e) {
      res.status(500).json({ message: errMsgs.common });
    }
  }
);

module.exports = router;
