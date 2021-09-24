/*alert(5+5);
typeof(23);*/


// var myName = "Nima";
// var yourName = prompt("What is your name?");
// alert("My name is " + myName + ", welcome to my course " + yourName + "!");

// var a = "3";
// var b = "8";

// var oldA = a;
// a = b;
// b = oldA;

// alert("a is : " + a + " , b is : "+ b);

// alert("hello" + " " + "world");
//------------------------
// var message = "Hello";
// var name = "Nima";

// // alert(message + " " + name);

// alert(name.length);
//------------------------
// var myInput = window.prompt("Enter your name: ");
// alert("You have written " + myInput.length + " you have " + (140-myInput.length) + " characters left.");


//Twitt cutting challenge
// var input = window.prompt("Enter yout twiit: ");
// alert("Text too long, end part has been delted: " + input.slice(0,3));
// var name ="abc";
// name.slice(0,4);

//------------------------
//UPAER CASE
// var name = "Nima";
// name = name.toUpperCase();
// name = name.toLowerCase();


//------------------------
//challenge - captialise the first character of user name.
// var name = prompt("What is your name");
// var firstChar = name.slice(0,1);
// var firstCharIpper = firstChar.toUpperCase();
// var restOfName = name.slice(1, name.length);
// var restOfNameLower = restOfName.toLowerCase();
// alert("Hello, " + firstCharIpper+restOfNameLower);


//------------------------------------------------------------NUMBER---------------------------------------
//challenge covert doge age to human age
//humanAge = (dogeAge - 2)*4 + 21

var dogAge = console.log("Enter your doge age: ");
var humanAge = (dogAge-2)*4 +21;
alert("You dog human age is: " + humanAge);