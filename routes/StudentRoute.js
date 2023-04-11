const router = require("express").Router();

// const Authenticate = require("../../Authentication");
let StudentController = require("../controllers/studentControler");

router.post("", StudentController.create);
router.delete("/:id", StudentController.delete);
router.get("/:id", StudentController.getOne);
router.get("", StudentController.getAll);

module.exports = router;
