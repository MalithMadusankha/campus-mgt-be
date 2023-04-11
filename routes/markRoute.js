const router = require("express").Router();
// const Authenticate = require("../../Authentication");
let MarkControler = require("../controllers/markControler");

router.post("", MarkControler.create);
router.get("/:id", MarkControler.getOne);
router.get("", MarkControler.getAll);
router.put("/:id", MarkControler.update);
router.delete("/:id", MarkControler.delete);

module.exports = router;
