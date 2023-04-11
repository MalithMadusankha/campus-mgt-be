const mongoose = require("mongoose");

const markSchema = new mongoose.Schema({
  module: { type: String, required: true },
  semester: { type: Number, required: true },
  batch: { type: Number },
  year: { type: Number, required: true },
  results: [
    {
      name: String,
      student_id: String,
      quize: Number,
      test: Number,
      exam: Number,
      result: Number,
      grade: String,
    },
  ],
});

const Mark = mongoose.model("Mark", markSchema);

module.exports = Mark;
