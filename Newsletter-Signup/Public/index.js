//Websocket connection to server
//const ws = new WebSocket('ws://localhost:8080');
var HOST = location.origin.replace(/^http/, 'ws')
var ws = new WebSocket(HOST);
ws.addEventListener("open", () => {
    console.log("We are connected");
});

ws.addEventListener("message", e => {
    //console.log("Client received ", e.data);
    if(e.data == "Succeeded"){
        DisplayElements("alert-success",true);
        DisplayElements("alert-fail",false);
    } else {
        DisplayElements("alert-fail",true);
        DisplayElements("alert-success",false);
    }
});

function DisplayElements(elementName,Show){
    var element =  document.getElementById(elementName);
    if(Show === true){
        element.classList.remove("hide");
        element.classList.add("show");
    } else {
        element.classList.remove("show");
        element.classList.add("hide");
    }
}    



// var form = document.getElementById("myForm");
// form.addEventListener('submit', handleForm);
// function handleForm(event) { 
//     console.log("test")
//     event.preventDefault(); 
// } 

