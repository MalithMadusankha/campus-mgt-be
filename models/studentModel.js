const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  student_id: { type: String, required: true },
  course: { type: String },
  email: { type: String, required: true },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
