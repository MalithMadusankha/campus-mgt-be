const mongoose = require("mongoose");

const moduleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  batches: [{ name: String }],
  lectures: [{ name: String }],
});

const Module = mongoose.model("Module", moduleSchema);

module.exports = Module;
