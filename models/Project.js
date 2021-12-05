const { Schema, model, Types } = require("mongoose");

const projectSchema = new Schema({
  title: { type: String, required: true },
  owner: { type: Types.ObjectId, ref: "User" },
  contributors: { type: Types.ObjectId, ref: "User" },
  created: { type: Date, default: Date.now },
  tasks: [{ type: Types.ObjectId, ref: "Task" }],
});

module.exports = model("Project", projectSchema);
