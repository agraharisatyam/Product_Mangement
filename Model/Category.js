const db = require('../db');

exports.getAll = (callback)=>{
    db.query("SELECT * FROM category",callback);
};

exports.create = (name,callback)=>{
    db.query(
        "INSERT INTO category(name) VALUES(?)",
        [name],
        callback
    );
};

exports.getById = (id,callback)=>{
    db.query(
        "SELECT * FROM category WHERE id=?",
        [id],
        callback
    );
};

exports.update = (id,name,callback)=>{
    db.query(
        "UPDATE category SET name=? WHERE id=?",
        [name,id],
        callback
    );
};

exports.deleteById = (id, callback) => {

    db.query(
        "DELETE FROM product WHERE category_id=?",
        [id],
        (err) => {

            if (err) return callback(err);
            db.query(
                "DELETE FROM category WHERE id=?",
                [id],
                callback
            );
        }
    );

};