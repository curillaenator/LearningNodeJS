const Logger = require("./log");
const logger = new Logger();

logger.on("my-event", (args) => {
  const { id, name } = args;
  console.log(id, name);
});

logger.log("kirill");
