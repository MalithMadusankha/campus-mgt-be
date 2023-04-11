const router = require("express").Router();
// const Authenticate = require("../../Authentication");
let LectureControler = require("../controllers/lectureControler");

router.post("", LectureControler.create);
router.get("/:id", LectureControler.getOne);
router.get("", LectureControler.getAll);
router.put("/:id", LectureControler.update);
router.delete("/:id", LectureControler.delete);

module.exports = router;
