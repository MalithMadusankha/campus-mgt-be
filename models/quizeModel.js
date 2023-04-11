const mongoose = require("mongoose");

const quizeSchema = new mongoose.Schema({
  module: { type: String, required: true },
  semester: { type: Number, required: true },
  batch: { type: Number },
  duration: { type: Number, required: true },
  marks: [
    {
      name: String,
      student_id: String,
      mark: Number,
    },
  ],
  questions: [
    {
      question: String,
      answers: [{ ans: String }],
      correct_answer: String,
    },
  ],
});

const Quize = mongoose.model("Quize", quizeSchema);

module.exports = Quize;
