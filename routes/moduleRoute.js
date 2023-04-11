const router = require("express").Router();
// const Authenticate = require("../../Authentication");
let ModuleControler = require("../controllers/moduleControler");

router.post("", ModuleControler.create);
router.get("/:id", ModuleControler.getOne);
router.get("", ModuleControler.getAll);
router.put("/:id", ModuleControler.update);
router.delete("/:id", ModuleControler.delete);

module.exports = router;
