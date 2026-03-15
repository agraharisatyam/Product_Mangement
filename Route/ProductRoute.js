const express = require("express");
const router = express.Router();
const controller = require("../Controller/ProductController");

// show products
router.get("/", controller.list);

// show add form
router.get("/new", controller.addForm);

// create product
router.post("/", controller.create);

// show edit form
router.get("/:id/edit", controller.editForm);

// update product
router.patch("/:id", controller.update);

// delete product
router.delete("/:id", controller.delete);

module.exports = router;