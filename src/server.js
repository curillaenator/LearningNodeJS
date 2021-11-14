const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log("server request");

  let basePath = "";
  const getPath = (page) => path.resolve(__dirname, "pages", page);

  res.setHeader("Content-type", "text/html");

  // res.setHeader("Content-type", "text/html");
  // res.write("<head><link rel='stylesheet' href='#'></head>");
  // res.write(`<h1>420 time!!! ${req.url}<h1>`);
  // res.write("<p style='color: red'>my first stupid server !!!!<p>");

  // res.setHeader("Content-type", "application/json");

  // const data = JSON.stringify([
  //   { name: "kirill", age: 35 },
  //   { name: "arturov", age: 16 },
  // ]);

  // res.end(data);

  switch (req.url) {
    case "/":
    case "/home":
    case "/index.html":
      basePath = getPath("index.html");
      res.statusCode = 200;
      break;

    case "/about-us":
      res.statusCode = 301;
      res.setHeader("Location", "/contacts");
      res.end();
      break;

    case "/contacts":
      basePath = getPath("contacts.html");
      res.statusCode = 200;
      break;

    default:
      basePath = getPath("error.html");
      res.statusCode = 404;
      break;
  }

  fs.readFile(basePath, (error, data) => {
    if (error) {
      console.log(error);
      res.statusCode = 500;
    }

    if (!error) res.write(data);

    res.end();
  });
});

server.listen(PORT, "localhost", (err) => {
  err ? console.log(err) : console.log(`listening ${PORT}`);
});
