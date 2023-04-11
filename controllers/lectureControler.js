let lectureModel = require("../models/lectureModel");

exports.create = (req, res, next) => {
  console.log(`<=== Create Lecture ====>`);
  // Assigning value to variabales

  let name = req.body.name;
  let lecture_id = req.body.specialist;
  let email = req.body.email;
  let modules = req.body.modules;

  const newLecture = new lectureModel({
    name,
    lecture_id,
    email,
    modules,
  });

  newLecture
    .save()
    .then(() => {
      res.json(" Lecture Created ");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAll = (req, res, next) => {
  console.log(`<=== Get All Lectures ====>`);
  lectureModel
    .find()
    .then((lectures) => {
      res.json(lectures);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getOne = async (req, res) => {
  console.log(`<=== Get Lecture ====>`);

  let id = req.params.id;
  await lectureModel
    .findById(id)
    .then((lecture) => {
      res.json(lecture);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAllLectureOne = (req, res, next) => {
  console.log(`<=== Get All Lectures ====>`);
  lectureModel
    .find()
    .sort({ _id: -1 })
    .limit(1)
    .then((lecture) => {
      res.json(lecture);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Update Lecture
exports.update = async (req, res) => {
  console.log(`<=== Update Lecture ====>`);
  let id = req.params.id;
  const { name, lecture_id, email, modules } = req.body;

  const lectureUpdate = {
    name,
    lecture_id,
    email,
    modules,
  };

  const update = await lectureModel
    .findByIdAndUpdate(id, lectureUpdate)
    .then(() => {
      res.status(200).send({ status: "Lecture Updated!" });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error! Cannot Update!" });
      console.log(err.message);
    });
};

// Delete Lecture
exports.delete = async (req, res) => {
  console.log(`<=== Delete Lecture ====>`);
  let id = req.params.id;

  await lectureModel
    .findByIdAndDelete(id)
    .then(() => {
      res.status(200).send({ status: "Lecture Deleted!" });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error! Cannot Delete!" });
      console.log(err.message);
    });
};
