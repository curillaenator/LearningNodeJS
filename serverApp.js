const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const { add } = require("lodash");

const app = express();

add.use("/api/auth");

const PORT = config.get("port") || 3000;
const MONGO_URI = config.get("mongoURI");

const start = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    app.listen(PORT, () => console.log(`Server app started on ${PORT}`));
    //
  } catch (e) {
    console.log("server error", e.message);
    process.exit(1);
  }
};

start();
