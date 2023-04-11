const router = require("express").Router();
// const Authenticate = require("../../Authentication");
let QuizeControler = require("../controllers/quizeControler");

router.post("", QuizeControler.create);
router.get("/:id", QuizeControler.getOne);
router.get("", QuizeControler.getAll);
router.put("/:id", QuizeControler.update);
router.delete("/:id", QuizeControler.delete);

module.exports = router;
