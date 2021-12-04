const axios = require("axios");
const { check, validationResult } = require("express-validator");
const { Router } = require("express");
const config = require("config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = Router();

const base = axios.create({
  baseURL: config.get("mongoApiURL"),
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Request-Headers": "*",
    "api-key": config.get("mongoApiKey"),
  },
});

const data = {
  dataSource: "ClusterArt",
  database: "taskManager",
  collection: "users",
};

router.post(
  "/register",
  [
    check("email", "Некорректный email").isEmail(),
    check("password", "Минимум 8 символов").isLength({ min: 8 }),
  ],
  async (req, res) => {
    // console.log("Body: ", req.body);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({
        errors: errors.array(),
        message: "Invalid registration data",
      });
    }

    const { email, password } = req.body;

    const isUser = await base
      .post("/action/findOne", { ...data, filter: { email } })
      .then((r) => r.data.document);

    console.log("is user: ", isUser);

    if (isUser) {
      return res.status(400).json({ message: "Email is already used" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const document = {
      ...data,
      document: { email, password: hashedPassword },
    };

    base
      .post("/action/insertOne", document)
      .then((r) => {
        res
          .status(201)
          .json({ status: r.status, message: "User created, please sign in!" });
        console.log(r.data);
      })
      .catch(() => {
        res.status(500).json({ message: "Something went wrong, try again" });
        console.log("post error");
      });
  }
);

router.post(
  "/login",
  [
    check("email", "Введите корректный email").normalizeEmail().isEmail(),
    check("password", "Введите пароль").exists(),
  ],
  async (req, res) => {
    // console.log("BODY", req.body);

    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        res
          .status(400)
          .json({ errors: errors.array(), message: "Invalid login data" });
      }

      const { email, password } = req.body;

      // const user = await User.findOne({ email });

      const user = await base
        .post("/action/findOne", { ...data, filter: { email } })
        .then((r) => r.data.document);

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
