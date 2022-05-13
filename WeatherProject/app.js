const express = require("express");
const { json } = require("express/lib/response");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/" , function(req,res){
    //test
    //res.send("Server is up and running");
    res.sendFile(__dirname + "/index.html");
})


app.post("/", function(req,res){
    //console.log("Post received " + req.body.cityName);
    const query = req.body.cityName; 
    const apiKey = "43c9056c6d9e8d1db232fdcb39182990";
    const units = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units="+ units;
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data",function(data){
            const weatherData = JSON.parse(data);
            console.log(weatherData);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
            console.log(temp);
            console.log(description);
            //cons
            //res.setHeader("Content-Type","text/html");
            res.write("<h1>The " + "&#x1f321;" + " temperature in " + query + " is " + temp + " degrees Celsius.</h1>");
            //res.write("<br>");
            res.write("<h1>The weather is currently " + description +".</h1>");
            res.write("<img src=" + imageURL + ">");
            res.send();
            // const testObject = {
            //     name: "Nima",
            //     LastName: "Jamalian"
            // }
            // console.log(JSON.stringify(testObject));
        })
    })
})



app.listen(3000,function(){
    console.log("Server is running on port 3000.");
})