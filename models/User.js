const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  created: { type: Date, default: Date.now },
  userName: { type: String, unique: true, default: "" },
  userAvatar: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  ownedProjects: [{ type: Types.ObjectId, ref: "Project" }],
  contributionProjects: [{ type: Types.ObjectId, ref: "Project" }],
});

module.exports = model("User", schema);
