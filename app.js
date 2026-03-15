const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const categoryRoutes = require("./Route/CategoryRoute");
const productRoutes = require("./Route/ProductRoute");

const app = express();

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));

// enable PATCH and DELETE from forms
app.use(methodOverride("_method"));

app.use("/categories",categoryRoutes);
app.use("/products",productRoutes);

app.listen(3000,()=>{
    console.log("Server running on port 3000");
});