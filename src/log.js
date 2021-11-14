const EventEmitter = require("events");

class Logger extends EventEmitter {
  log = (name) => this.emit("my-event", { id: "qwe", name });
}

module.exports = Logger;
