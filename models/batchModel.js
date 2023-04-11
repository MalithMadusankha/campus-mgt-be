const mongoose = require("mongoose");

const batchSchema = new mongoose.Schema({
  name: { name: String, required: true },
  students: [{ name: String, student_id: String }],
});

const Batch = mongoose.model("Batch", batchSchema);

module.exports = Batch;
