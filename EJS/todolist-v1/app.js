//Setup
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date = require(__dirname + "/date.js");
//console.log(date);
//Using EJS template 
app.set("view engine", "ejs");
//Use the body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
//Serve the public folder
app.use(express.static("public"));
//-------------------------------------------------
//Variables 
const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];
//-------------------------------------------------
//App
app.get("/", function(req,res){
    const day = date.getDate();
    res.render('list', {listTitle: day, newlistItems: items});
});

app.post("/", function(req,res){
    console.log(req.body);
    const item = req.body.newItem;
    if(item.trim().length !== 0){//check for empty item
        if(req.body.list === "Work"){
            workItems.push(item);
            res.redirect("/work");//redirect to work
        } else {
            items.push(item);
            res.redirect("/");//redirect to home route
        }
    }
});

app.get("/work",function(req,res){
    res.render("list", {listTitle: "Work List", newlistItems: workItems})
});

app.get("/about", function(req,res){
    res.render("about");
});

app.listen(3000,function(){
    console.log("Server started on port 3000");
});
