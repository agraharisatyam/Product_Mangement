const express = require("express");
const router = express.Router();
const controller = require("../Controller/CategoryController");

// show all categories
router.get("/", controller.list);

// show add form
router.get("/new", controller.addForm);

// create category
router.post("/", controller.create);

// show edit form
router.get("/:id/edit", controller.editForm);

// update category
router.patch("/:id", controller.update);

// delete category
router.delete("/:id", controller.delete);

module.exports = router;