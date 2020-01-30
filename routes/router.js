const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller.js");


router.get("/users", controller.getUsers);

/*
router.get("/create", biodataController.create);
router.post("/", biodataController.store);
router.get("/:id/edit", biodataController.edit);
router.put("/:id", biodataController.update);
router.delete("/:id", biodataController.destroy);
*/
module.exports = router;
