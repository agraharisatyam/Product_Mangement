const categoryModel = require('../Model/Category');

exports.list = (req,res)=>{
    categoryModel.getAll((err,data)=>{
        res.render("categories",{categories:data});
    });
};

exports.addForm = (req,res)=>{
    res.render("addCategory");
};

exports.create = (req,res)=>{
    const name = req.body.name;

    categoryModel.create(name,()=>{
        res.redirect("/categories");
    });
};

exports.editForm = (req,res)=>{

    const id = req.params.id;

    categoryModel.getById(id,(err,data)=>{
        res.render("editCategory",{category:data[0]});
    });
};

exports.update = (req,res)=>{

    const id = req.params.id;
    const name = req.body.name;

    categoryModel.update(id,name,()=>{
        res.redirect("/categories");
    });
};

exports.delete = (req,res)=>{

    const id = req.params.id;

    categoryModel.delete(id,()=>{
        res.redirect("/categories");
    });
};