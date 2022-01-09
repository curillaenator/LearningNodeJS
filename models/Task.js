const { Schema, model, Types } = require("mongoose");

const taskSchema = new Schema({
  projectId: { type: Types.ObjectId, ref: "Project" },
  title: { type: String, required: true },
  status: { type: String, required: true, default: "open" },
  created: { type: Date, default: Date.now },
  finished: { type: Date },
  owner: { type: Types.ObjectId, ref: "User" },
  executor: { type: Types.ObjectId, ref: "User" },
  description: { type: String },
  layout: { type: String, required: true },
});

module.exports = model("Task", taskSchema);
