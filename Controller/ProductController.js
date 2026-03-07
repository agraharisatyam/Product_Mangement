const productModel = require('../Model/Product');

exports.list = (req,res)=>{

    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const offset = (page - 1) * limit;

    productModel.getAll(limit,offset,(err,data)=>{

        productModel.getTotal((err,result)=>{

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

    productModel.getCategories((err,categories)=>{
        res.render("addProduct",{categories:categories});
    });

};

exports.create = (req,res)=>{

    const data = {
        name:req.body.name,
        category_id:req.body.category_id
    };

    productModel.create(data,()=>{
        res.redirect("/products");
    });

};

exports.editForm = (req,res)=>{

    const id = req.params.id;

    productModel.getById(id,(err,data)=>{

        productModel.getCategories((err,categories)=>{

            res.render("editProduct",{
                product:data[0],
                categories:categories
            });

        });

    });

};

exports.update = (req,res)=>{

    const id = req.params.id;

    const data = {
        name:req.body.name,
        category_id:req.body.category_id
    };

    productModel.update(id,data,()=>{
        res.redirect("/products");
    });

};

exports.delete = (req,res)=>{

    const id = req.params.id;

    productModel.delete(id,()=>{
        res.redirect("/products");
    });

};