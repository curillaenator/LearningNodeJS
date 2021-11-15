const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const authRoute = require("./routes/auth.routes");

const app = express();

app.use("/api/auth", authRoute);

const PORT = config.get("port") || 3300;
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
