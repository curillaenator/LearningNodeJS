const fs = require("fs");

fs.readFile("./docs/text.txt", async (error, data) => {
  console.log(data);
  // await fs.mkdir("./files", () => {});

  // await fs.writeFile("./files/text2.txt", data, (err) => {
  //   err ? console.log(error) : null;
  // });
});

// setTimeout(() => {
//   if (fs.existsSync("./files/text2.txt")) {
//     fs.unlink("./files/text2.txt", () => {});
//   }
// }, 3000);

// setTimeout(() => {
//   if (fs.existsSync("./files")) {
//     fs.rmdir("./files", () => {});
//   }
// }, 5000);
