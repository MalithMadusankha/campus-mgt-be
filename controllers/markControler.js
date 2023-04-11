let MarkModel = require("../models/markModel");

exports.create = (req, res, next) => {
  console.log(`<=== Create Mark ====>`);
  // Assigning value to variabales

  let module = req.body.module;
  let semester = req.body.semester;
  let batch = req.body.batch;
  let year = req.body.year;
  let results = req.body.results;

  const newMark = new MarkModel({
    module,
    semester,
    batch,
    year,
    results,
  });

  newMark
    .save()
    .then(() => {
      res.json(" Mark Created ");
    })
    .catch((err) => {
      console.log(err);
    });
};

// Update Lecture
exports.update = async (req, res) => {
  console.log(`<=== Update Mark ====>`);
  let id = req.params.id;
  const { module, semester, batch, year, results } = req.body;

  const markUpdate = {
    module,
    semester,
    batch,
    year,
    results,
  };

  const update = await MarkModel.findByIdAndUpdate(id, markUpdate)
    .then(() => {
      res.status(200).send({ status: "Lecture Updated!" });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error! Cannot Update!" });
      console.log(err.message);
    });
};

exports.getAll = (req, res, next) => {
  console.log(`<=== Get All Marks ====>`);
  MarkModel.find()
    .then((marks) => {
      res.json(marks);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getOne = async (req, res) => {
  console.log(`<=== Get Mark ====>`);

  let id = req.params.id;
  await MarkModel.findById(id)
    .then((mark) => {
      res.json(mark);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Delete Lecture
exports.delete = async (req, res) => {
  console.log(`<=== Delete Mark ====>`);
  let id = req.params.id;

  await MarkModel.findByIdAndDelete(id)
    .then(() => {
      res.status(200).send({ status: "Mark Deleted!" });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error! Cannot Delete!" });
      console.log(err.message);
    });
};
