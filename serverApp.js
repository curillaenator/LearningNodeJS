const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const app = express();

app.use(express.json({ extended: true }));

app.use("/api/auth", require("./routes/auth.routes"));

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
