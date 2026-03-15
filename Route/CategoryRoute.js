const express = require("express");
const router = express.Router();
const {list,create,addForm,editForm,updateList,deleteList} = require("../Controller/CategoryController");

// show all categories
router.get("/", list);

// show add form
router.get("/new", addForm);

// create category
router.post("/", create);

// show edit form
router.get("/:id/edit", editForm);

// update category
router.patch("/:id", updateList);

// delete category
router.delete("/:id", deleteList);

module.exports = router;