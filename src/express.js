const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;

const getPath = (page) => path.resolve(__dirname, "pages", page);

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`listening ${PORT}`);
});

app.get("/", (req, res) => {
  res.sendFile(getPath("index.html"));
});

app.get("about-us", (req, res) => {
  res.redirect("/contacts");
});

app.get("/contacts", (req, res) => {
  res.sendFile(getPath("contacts.html"));
});

app.use((req, res) => {
  res.status(404).sendFile(getPath("error.html"));
});
