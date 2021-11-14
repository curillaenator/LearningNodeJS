const express = require("express");
const path = require("path");

const PORT = 3000;

const app = express();

app.set("view engine", "ejs");

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

app.get("/posts/:id", (req, res) => {
  res.sendFile(getPath("post.html"));
});

app.get("/posts", (req, res) => {
  res.sendFile(getPath("posts.html"));
});

app.get("/add-post", (req, res) => {
  res.sendFile(getPath("add-post.html"));
});

app.use((req, res) => {
  res.status(404).sendFile(getPath("error.html"));
});
