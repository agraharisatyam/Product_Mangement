const express = require("express");
const router = express.Router();

const controller = require("../Controller/ProductController");

router.get("/",controller.list);

router.get("/add",controller.addForm);

router.post("/add",controller.create);

router.get("/edit/:id",controller.editForm);

router.post("/update/:id",controller.update);

router.get("/delete/:id",controller.delete);

module.exports = router;