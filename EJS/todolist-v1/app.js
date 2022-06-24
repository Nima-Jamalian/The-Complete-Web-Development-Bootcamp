//Setup
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
//Using EJS template 
app.set("view engine", "ejs");
//Use the body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
//Serve the public folder
app.use(express.static("public"));
//-------------------------------------------------
//Variables 
var items = ["Buy Food", "Cook Food", "Eat Food"];
//-------------------------------------------------
//App
app.get("/", function(req,res){
    var today = new Date();
    var options = {
        weekday: "long",
        year: 'numeric',
        day: "numeric",
        month: "long"
    };
    var day = today.toLocaleDateString("en-US", options);

    res.render('list', {kindOfDay: day, newlistItems: items});
});

app.post("/", function(req,res){
var item = req.body.newItem;
console.log(item);
items.push(item);
res.redirect("/");//redirect to home route
});

app.listen(3000,function(){
    console.log("Server started on port 3000");
});

