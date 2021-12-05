const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  userName: { type: String, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  availableProjects: [{ type: Types.ObjectId, ref: "Project" }],
});

module.exports = model("User", schema);
