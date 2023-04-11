const mongoose = require("mongoose");

const lectureSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lecture_id: { type: String, required: true },
  modules: [{ name: String }],
  email: { type: String, required: true },
});

const Lecture = mongoose.model("Lecture", lectureSchema);

module.exports = Lecture;
