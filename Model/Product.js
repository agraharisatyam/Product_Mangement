const db = require('../db');

exports.getAll = (limit,offset,callback)=>{

    const sql = `
SELECT 
product.id AS ProductId,
product.name AS ProductName,
category.name AS CategoryName
FROM product
JOIN category
ON product.category_id = category.id
ORDER BY product.id ASC
LIMIT ? OFFSET ?
`;
    

    db.query(sql,[limit,offset],callback);
};
exports.getTotal = (callback)=>{
    db.query("SELECT COUNT(*) AS total FROM product",callback);
};

exports.getCategories = (callback)=>{
    db.query("SELECT * FROM category",callback);
};

exports.create = (data,callback)=>{

    db.query(
        "INSERT INTO product(name,category_id) VALUES(?,?)",
        [data.name,data.category_id],
        callback
    );
};

exports.getById = (id,callback)=>{
    db.query(
        "SELECT * FROM product WHERE id=?",
        [id],
        callback
    );
};

exports.update = (id,data,callback)=>{

    db.query(
        "UPDATE product SET name=?, category_id=? WHERE id=?",
        [data.name,data.category_id,id],
        callback
    );
};

exports.delete = (id,callback)=>{
    db.query(
        "DELETE FROM product WHERE id=?",
        [id],
        callback
    );
};