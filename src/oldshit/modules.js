const os = require("os");

const { name, getName } = require("./test");

console.log(os.platform(), os.release());
