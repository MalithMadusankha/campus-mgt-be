let QuizeModel = require("../models/quizeModel");

exports.create = (req, res, next) => {
  console.log(`<=== Create Quize ====>`);
  // Assigning value to variabales

  let module = req.body.module;
  let semester = req.body.semester;
  let batch = req.body.batch;
  let duration = req.body.duration;
  let marks = req.body.marks;
  let questions = req.body.questions;

  const newQuize = new QuizeModel({
    module,
    semester,
    batch,
    duration,
    marks,
    questions,
  });

  newQuize
    .save()
    .then(() => {
      res.json(" Quize Created ");
    })
    .catch((err) => {
      console.log(err);
    });
};

// Update Lecture
exports.update = async (req, res) => {
  console.log(`<=== Update Quize ====>`);
  let id = req.params.id;
  const { module, semester, batch, duration, marks, questions } = req.body;

  const quizeUpdate = {
    module,
    semester,
    batch,
    duration,
    marks,
    questions,
  };

  const update = await QuizeModel.findByIdAndUpdate(id, quizeUpdate)
    .then(() => {
      res.status(200).send({ status: "Quize Updated!" });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error! Cannot Update!" });
      console.log(err.message);
    });
};

exports.getAll = (req, res, next) => {
  console.log(`<=== Get All Quizes ====>`);
  QuizeModel.find()
    .then((quizes) => {
      res.json(quizes);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getOne = async (req, res) => {
  console.log(`<=== Get Quize ====>`);

  let id = req.params.id;
  await QuizeModel.findById(id)
    .then((quize) => {
      res.json(quize);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Delete Lecture
exports.delete = async (req, res) => {
  console.log(`<=== Delete Quize ====>`);
  let id = req.params.id;

  await QuizeModel.findByIdAndDelete(id)
    .then(() => {
      res.status(200).send({ status: "Quize Deleted!" });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error! Cannot Delete!" });
      console.log(err.message);
    });
};
