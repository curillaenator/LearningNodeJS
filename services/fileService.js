const fs = require("fs");
const File = require("../models/File");

class FileService {
  createDir() {
    return new Promise((resolve, reject) => {
      try {
      } catch (error) {
        return reject({ message: "File error!!!" });
      }
    });
  }
}

module.exports = new FileService();
