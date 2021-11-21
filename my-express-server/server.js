const express = require("express");

const app = express();

app.get("/", function(request, response){
    response.send("<h1>Hello, world from server.</h1>");
    // console.log(request);
})

app.get("/contact", function(req, res){
    res.send("Contact me: nima.jamalian@me.com");
})

app.get("/about", function(req,res){
    res.send("This is Nima Jamalian website.");
})

app.get("/skill", function(req,res){
    res.send("Programming");
})

app.listen(3000, () =>{
    console.log("Server started on port 3000");
});