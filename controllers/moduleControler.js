let moduleModel = require("../models/moduleModel");

exports.create = (req, res, next) => {
  console.log(`<=== Create Module ====>`);
  // Assigning value to variabales

  let name = req.body.name;
  let batches = req.body.batches;
  let lectures = req.body.lectures;

  const newModule = new moduleModel({
    name,
    batches,
    lectures,
  });

  newModule
    .save()
    .then(() => {
      res.json(" Module Created ");
    })
    .catch((err) => {
      console.log(err);
    });
};

// Update Lecture
exports.update = async (req, res) => {
  console.log(`<=== Update Module ====>`);
  let id = req.params.id;
  const { name, batches, lectures } = req.body;

  const moduleUpdate = {
    name,
    batches,
    lectures,
  };

  const update = await moduleModel
    .findByIdAndUpdate(id, moduleUpdate)
    .then(() => {
      res.status(200).send({ status: "Lecture Updated!" });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error! Cannot Update!" });
      console.log(err.message);
    });
};

exports.getAll = (req, res, next) => {
  console.log(`<=== Get All Modules ====>`);
  moduleModel
    .find()
    .then((modules) => {
      res.json(modules);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getOne = async (req, res) => {
  console.log(`<=== Get Module ====>`);

  let id = req.params.id;
  await moduleModel
    .findById(id)
    .then((module) => {
      res.json(module);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Delete Lecture
exports.delete = async (req, res) => {
  console.log(`<=== Delete Module ====>`);
  let id = req.params.id;

  await moduleModel
    .findByIdAndDelete(id)
    .then(() => {
      res.status(200).send({ status: "Module Deleted!" });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error! Cannot Delete!" });
      console.log(err.message);
    });
};
