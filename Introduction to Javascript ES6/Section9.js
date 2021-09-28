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

// var dogAge = prompt("Enter you dog age: ");
// var humanAge = ((dogAge-2)*4) +21;
// alert("You dog human age is: " + humanAge);

//------------------------------------------------------------FUNCATION---------------------------------------
// function SayHiToNima() {
//     console.log("Hello, Nima");
// }

// SayHiToNima();



//---------------------------------------------------------------
// function getMilk(money) {   
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveRight");
//   console.log("moveRight");
//   var numberOfButtlesCanBuy = money/1.5
//   console.log("Buy " + Math.floor(numberOfButtlesCanBuy) + " buttles of milk");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("enterHouse");
// }

// getMilk(5);//$1.5 per bottles


//Return FUNCATION

// function getMilk(money, cost) {   
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("Buy " + calcBottles(money,cost) + " buttles of milk");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("enterHouse");
//   return calcChange(money,cost);
// }

// function calcBottles(startingMoney, costPerBottle){
//   var numberOfBottles = Math.floor(startingMoney/costPerBottle);
//   return numberOfBottles;
// }

// function calcChange(startingAmount, costPerBottle){
//   var change = startingAmount % costPerBottle;
//   return change
// }

// console.log("Change is: " + getMilk(5, 1.5) + "$");



//---------------------------------------------------------------------------
//Challenge BMW Calculator

//BMI = weight(kg)/height^2 (m^2)

function bmiCalculator(weight,height){
  return Math.round(weight/(height*height));
}

console.log("My BMI is: " + bmiCalculator(65,1.8));



//Getting Input in VS CODE
//https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs
// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// readline.question(`What's your name?`, name => {
//   console.log(`Hi ${name}!`)
//   readline.close()
// })
