//How event call back work in action
function anotherAddEventListener(typeOfEvent, callback){
    //Detect Event Code..
    var eventThatHappend = {
    eventType: "keydown",
    key: "p",
    durationOfKeypress: 1
    }
    
    if(eventThatHappend.eventType == typeOfEvent){
    callback(eventThatHappend);
    }
    }

    anotherAddEventListener("keydown", function(event){console.log(event);});
    //output {eventType: 'keydown', key: 'p', durationOfKeypress: 1}

    //the code is the same as the code below. It just show how the call back function works in action
    document.addEventListener("keypress",function(event){console.log(event);});

//output KeyboardEvent {isTrusted: true, key: 'd', code: 'KeyD', location: 0, ctrlKey: false, …}