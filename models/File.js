const { Schema, model, Types } = require("mongoose");

const fileSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  url: { type: String },
  size: { type: Number, default: 0 },
  path: { type: String, default: "" },
  created: { type: Date, default: Date.now },
  owner: { type: Types.ObjectId, ref: "User" },
  parent: { type: Types.ObjectId, ref: "File" },
  childs: [{ type: Types.ObjectId, ref: "File" }],
});

module.exports = model("File", fileSchema);
