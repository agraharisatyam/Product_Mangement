const {getAll,create,getById,update,deleteById} = require('../Model/Category');

exports.list = (req,res)=>{
    getAll((err,data)=>{
        res.render("categories",{categories:data});
    });
};

exports.addForm = (req,res)=>{
    res.render("addCategory");
};

exports.create = (req,res)=>{
    const name = req.body.name;

    create(name,()=>{
        res.redirect("/categories");
    });
};

exports.editForm = (req,res)=>{

    const id = req.params.id;

    getById(id,(err,data)=>{
        res.render("editCategory",{category:data[0]});
    });
};

exports.updateList = (req,res)=>{

    const id = req.params.id;
    const name = req.body.name;

    update(id,name,()=>{
        res.redirect("/categories");
    });
};

exports.deleteList = (req,res)=>{

    const id = req.params.id;

    deleteById(id,()=>{
        res.redirect("/categories");
    });
};