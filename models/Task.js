const { Schema, model, Types } = require("mongoose");

const taskSchema = new Schema({
  title: { type: String, required: true },
  projectId: { type: Types.ObjectId, ref: "Project" },
  created: { type: Date, default: Date.now },
});

module.exports = model("Project", taskSchema);
