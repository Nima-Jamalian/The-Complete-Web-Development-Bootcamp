const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    //__dirname returns the path of where the current file is
    //This command is very useful cause in a server we may not know the exact location of our files 
    //So we can user __direname to get current path of the file and access the other files in the project
    //console.log(__dirname);
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req,res){
    console.log(req.body);
    //Get access to element of data using req.body.elementName
    //You get the element as text format you can convert it to different data type
    //For example, here we wanted to get the number as int not text/string so 
    //We convert the string to int using javaScript Number function that convert string to number
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("Result = " + result);
});


//BMI Calculator Route
app.get("/bmicalculator", function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmicalculator", function(req,res){
    //BMI Calculator challenge
    res.send("Your BMI is:  " + bmiCalculator(Number(req.body.weight),Number(req.body.height)));
});

app.listen(3000,()=>{
console.log("Server is running on port 3000");
});

//-----------

function bmiCalculator(weight,height){
    return Math.round(weight/(height*height));
}


