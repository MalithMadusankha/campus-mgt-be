let batchModel = require("../models/batchModel");

exports.create = (req, res, next) => {
  console.log(`<=== Create Batch ====>`);
  // Assigning value to variabales

  let name = req.body.name;
  let students = req.body.students;

  const newBatch = new batchModel({
    name,
    students,
  });

  newBatch
    .save()
    .then(() => {
      res.json(" Batch Created ");
    })
    .catch((err) => {
      console.log(err);
    });
};

// Update Lecture
exports.update = async (req, res) => {
  console.log(`<=== Update Batch ====>`);
  let id = req.params.id;
  const { name, students } = req.body;

  const batchUpdate = {
    name,
    students,
  };

  const update = await batchModel
    .findByIdAndUpdate(id, batchUpdate)
    .then(() => {
      res.status(200).send({ status: "Lecture Updated!" });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error! Cannot Update!" });
      console.log(err.message);
    });
};

exports.getAll = (req, res, next) => {
  console.log(`<=== Get All Batchs ====>`);
  batchModel
    .find()
    .then((batches) => {
      res.json(batches);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getOne = async (req, res) => {
  console.log(`<=== Get Batch ====>`);

  let id = req.params.id;
  await batchModel
    .findById(id)
    .then((batch) => {
      res.json(batch);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Delete Lecture
exports.delete = async (req, res) => {
  console.log(`<=== Delete Batch ====>`);
  let id = req.params.id;

  await batchModel
    .findByIdAndDelete(id)
    .then(() => {
      res.status(200).send({ status: "Batch Deleted!" });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error! Cannot Delete!" });
      console.log(err.message);
    });
};
