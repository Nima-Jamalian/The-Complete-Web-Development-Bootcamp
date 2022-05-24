//Server
const express = require("express");
const { json } = require("express/lib/response");
const request = require("request");
const bodyParser = require("body-parser");
const https = require("https");

//WebSocket
// const WebSocket = require("ws");
// const wss = new WebSocket.Server({port:8080});
//Mailchimp Configure
const mailchimp = require("@mailchimp/mailchimp_marketing");
mailchimp.setConfig({
    apiKey: "DELETED",
    server: "DELETED",
});
const listID = "DELETED";

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("Public"));
app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
    //res.send("Server is up and running");
})

app.post("/",function(req,res){
    console.log("User InputD Data: ", req.body.FirstName, req.body.LastName, req.body.EmailAddress);
    const data = {
            email_address: req.body.EmailAddress,
            status: "subscribed",
            merge_fields: {
                FNAME:  req.body.FirstName,
                LNAME: req.body.LastName
            }
    }; 

    const request = async() => {
        try{
         const response = await mailchimp.lists.addListMember(listID, data);
            console.log("Succeeded");
            connectedClient.send("Succeeded");
            console.log(response.statusCode);
            res.status(204).send();
        } catch (err){
            console.log("Failed");
            connectedClient.send("Failed");
            res.status(204).send();
        }
    };


    request();
})

const server = app.listen(process.env.PORT || 3000,function(){
    console.log("Server is running on port 3000.");
})

//WebSocket
const { Server } = require("ws");
const wss = new Server({server});

var connectedClient;
wss.on("connection",ws => {
    console.log("New client connected!");
    connectedClient = ws;
    ws.on("close", () => {
        console.log("Client has disconnected!");
    });
});

