const express = require("express");
const router = express.Router();
const{list,addForm,create,editForm,deleteList, updateList} = require("../Controller/ProductController");

// show products
router.get("/",list);

// show add form
router.get("/new", addForm);

// create product
router.post("/", create);

// show edit form
router.get("/:id/edit", editForm);

// update product
router.patch("/:id", updateList);

// delete product
router.delete("/:id",deleteList);

module.exports = router;