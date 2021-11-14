const fs = require("fs");
const zlib = require("zlib");

const readStream = fs.createReadStream("./docs/lorem.txt");
const writeStream = fs.createWriteStream("./docs/streamed.txt");

const compressedStream = zlib.createGzip();

// readStream.on("data", (chunk) => {
//   writeStream.write(chunk);
// });

const handleError = () => {
  console.log("error");
  readStream.destroy();
  writeStream.end("bad data");
};

readStream
  .on("error", handleError)
  .pipe(compressedStream)
  .pipe(writeStream)
  .on("error", handleError);
