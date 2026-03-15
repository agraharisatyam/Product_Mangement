const {getCategories,create,getAll,getById,getTotal,update,deleteById} = require('../Model/Product');

exports.list = (req,res)=>{

    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const offset = (page - 1) * limit;

    getAll(limit,offset,(err,data)=>{

            getTotal((err,result)=>{

            const totalProducts = result[0].total;
            const totalPages = Math.ceil(totalProducts / limit);

            res.render("products",{
                products:data,
                page:page,
                totalPages:totalPages
            });

        });

    });

};


exports.addForm = (req,res)=>{

    getCategories((err,categories)=>{
        res.render("addProduct",{categories:categories});
    });

};

exports.create = (req,res)=>{

    const data = { name:req.body.name, category_id:req.body.category_id};

    create(data,()=>{
        res.redirect("/products");
    });

};

exports.editForm = (req,res)=>{

    const id = req.params.id;

    getById(id,(err,data)=>{

        getCategories((err,categories)=>{

            res.render("editProduct",{
                product:data[0],
                categories:categories
            });

        });

    });

};

exports.updateList = (req,res)=>{

    const id = req.params.id;

    const data = {
        name:req.body.name,
        category_id:req.body.category_id
    };

        update(id,data,()=>{
        res.redirect("/products");
    });

};

exports.deleteList = (req,res)=>{

    const id = req.params.id;

    deleteById(id,()=>{
        res.redirect("/products");
    });

};