const express = require("express");
const { json } = require("express/lib/response");
const request = require("request");
const bodyParser = require("body-parser");
const https = require("https");
//Mailchimp Configure
const mailchimp = require("@mailchimp/mailchimp_marketing");
mailchimp.setConfig({
    apiKey: "67d1356301d9a098479ee4571b61fcb4",
    server: "us10",
});
const listID = "1f95c02df0";



//const indexJS = require("./Public/index.js");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("Public"));
app.get("/", function(req,res){
    res.sendFile(__dirname + "/signup.html");
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
         const response = await mailchimp.lists.addListMember(listID, data);
          res.sendFile(__dirname + "/success.html");
          //res.send(indexJS.DisplayElements(".alert-success",false));
        };
        
    //request().catch(e => res.sendFile(__dirname + "/failure.html"));
    request().catch(e => res.sendFile(__dirname + "/failure.html"));
    //res.send(e => res.send(indexJS.DisplayElements(".alert-success",false)));
})

app.listen(3000,function(){
    console.log("Server is running on port 3000.");
})

const WebSocket = require("ws");
const server = https.createServer(express);
const wss = new WebSocket.Server({server});

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('something');
});




//API Key
//67d1356301d9a098479ee4571b61fcb4-us10

//Audience ID
//1f95c02df0