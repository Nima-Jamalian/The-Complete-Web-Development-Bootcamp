
// module.exports = {
//     DisplayElements: function(elementName,Show){
//         const element = document.getElementsByClassName(elementName)[0];
//         if(Show === true){
//             element.classList.remove("hide");
//             element.classList.add("show");
//         } else {
//             element.classList.remove("show");
//             element.classList.add("hide");
//         }
//     }    
// }

const ws = new WebSocket('ws://www.host.com/path');

ws.on('open', function open() {
  ws.send('something');
});

ws.on('message', function message(data) {
  console.log('received: %s', data);
});

function TEST(elementName,Show){
    var element =  document.getElementById(elementName);
    if(Show === true){
        element.classList.remove(".hide");
        element.classList.add("show");
    } else {
        element.classList.remove("show");
        element.classList.add("hide");
    }
    console.log("GOT CALLED");
}    

TEST("alert-success",false);