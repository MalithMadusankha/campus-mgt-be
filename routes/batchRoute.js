const router = require("express").Router();
// const Authenticate = require("../../Authentication");
let BatchControler = require("../controllers/batchControler");

router.post("", BatchControler.create);
router.get("/:id", BatchControler.getOne);
router.get("", BatchControler.getAll);
router.put("/:id", BatchControler.update);
router.delete("/:id", BatchControler.delete);

module.exports = router;
