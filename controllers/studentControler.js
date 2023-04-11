let StudentModel = require("../models/studentModel");

exports.create = (req, res, next) => {
  console.log(`<=== Create Student ====>`);
  // Assigning value to variabales

  let name = req.body.name;
  let student_id = req.body.student_id;
  let course = req.body.course;
  let email = req.body.email;

  const newStudent = new StudentModel({
    name,
    student_id,
    course,
    email,
  });

  newStudent
    .save()
    .then(() => {
      res.json(" Student Created ");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAll = (req, res, next) => {
  console.log(`<=== Get All Students ====>`);
  StudentModel.find()
    .then((Students) => {
      res.json(Students);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Update Student
exports.update = async (req, res) => {
  console.log(`<=== Update Student ====>`);
  let id = req.params.id;
  const { name, student_id, course, email } = req.body;

  const StudentUpdate = {
    name,
    student_id,
    course,
    email,
  };

  const update = await StudentModel.findByIdAndUpdate(id, StudentUpdate)
    .then(() => {
      res.status(200).send({ status: "Student Updated!" });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error! Cannot Update!" });
      console.log(err.message);
    });
};

exports.delete = async (req, res) => {
  console.log(`<=== Delete Student ====>`);
  let id = req.params.id;

  await StudentModel.findByIdAndDelete(id)
    .then(() => {
      res.status(200).send({ status: "Student Deleted!" });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error! Cannot Delete!" });
      console.log(err.message);
    });
};

exports.getOne = async (req, res) => {
  console.log(`<=== Get Student ====>`);

  let id = req.params.id;
  await StudentModel.findById(id)
    .then((Student) => {
      // convert initialize vector from base64 to buffer
      const origionalData = Buffer.from(Student.iv, "base64");

      const decrypObj = decryptingHandler(Student, origionalData);

      res.json(decrypObj);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getStudentByUserId = async (req, res) => {
  console.log(`<=== Get Student By UserID ====>`);

  let id = req.params.id;

  await StudentModel.findOne({
    user_id: id,
  })
    .then((Student) => {
      res.json(Student);
    })
    .catch((err) => {
      console.log(err);
    });
};
