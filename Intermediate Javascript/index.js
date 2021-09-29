//Math.random gives number within the range 0 - 0.999999999999999999999 (16 decimal places)
// var n = Math.random();
// n = n * 6;
// n = Math.floor(n) + 1;
// console.log(n);

//---------------------------------------------------------------
//Random love generator challange 
// var name1 = window.prompt("Enter name of frist person");
// var name2 = window.prompt("Enter name of secound person");
// var loveNumber = Math.random();
// loveNumber = loveNumber *100;
// loveNumber = Math.floor(loveNumber) +1;
// if(loveNumber > 70){
//     alert("Your love score is so high!");
// } else {
//     alert("Your love score is " + loveNumber + "%");
// }


//---------------------------------------------------------------
//Comparators abd Equality
//=== check if the data type also match
//== does  not care about data type

// var loveNumber = Math.random();
// loveNumber = loveNumber *100;
// loveNumber = Math.floor(loveNumber) +1;
// if(loveNumber > 70){
//     alert("Your love score is " + loveNumber + "%" + " You love each other like Kanye loves Kanye." );
// } 
// if(loveNumber > 30 && loveNumber <= 70){
//     alert("Your love score is " + loveNumber + "%");
// } 

// if(loveNumber <= 30){
//     alert("Your love score is " + loveNumber + "%" + " You go together like oil and water.");
// }
//---------------------------------------------------------------

//BMW Calculator Advanced
// BMI Calculator Advanced (IF/ELSE)
// Previously, we've created a function that is able to calculate the BMI. But once we get a result, we
// will want to tell the user what the number means.
// Write a function that outputs (returns) a different message depending on the BMI.
// BMI <18.5, the output should be: "Your BMl is <bmis, so you are underweight."
// BMI 18.5-24.9, the output should be "Your BMI is <bmis, so you have a normal weight."
// BMI >24.9, the output should be "Your BMI is <bmis, so you are overweight."
// The message MUST be returned as an output from your function. You should NOT NEED to use
// alert, prompt or console.log in this challenge.
// IMPORTANT the message wording has to match precisely for the code to pass the validation.
// Including punctuation and capitalisation.


//---------------------------------------------------------------ARRAY

// var guestList = ["Nima","Viola", "Samira","Mohammad","Nooshin"]

// var guestName = window.prompt("Enter your name: ");
// if(guestList.includes(guestName)){
//     alert("Welcome to the party.");
// } else {
//      alert("Sorry you are not invited to this part.");
// }


//------------------FIZBUZZ Challeange---------------------
// for(let i=0; i<=100; i++){
//     if(i%3 == 0 && i%5 == 0){
//         console.log("FizzBuzz");
//     } else if(i%5 == 0){
//         console.log("Buzz")
//     } else if(i%3 == 0){
//         console.log("Fizz");
//     } else {
//           console.log(i);
//     }
// }

//Other way to imeplemnt this
// var output = [];
// var count = 1;
// function fizzBuzz(){
//     while (count <= 100){
//         if(count % 3 === 0 && count % 5 ===0){
//             output.push("FizzBuzz");
//         } else if(count % 3 === 0){
//             output.push("Fizz");
//         } else if(count % 5 === 0){
//             output.push("Buzz");
//         } else {
//             output.push(count);
//         }
//         count++;
//     }
//     console.log(output);
// }


//----------------------------------------
// Who's Buying Lunch? Code Challenge
// You are going to write a function which will select a random name from a list of names. The
// person selected will have to pay for everybody's food bill.
// Important: The output should e returned from the function and you do not need alert, prompt
// or console.log. The output should match the example output exactly, including capitalisation
// and punctuation.
// Example Input
// 1 ["Angela",
// "Ben".
// "Jenny",
// "Michael", "Chloe"]
// Example Output
// 1
// Michael is going to buy lunch today!
// Hint
// 1. You might need to think about Array.length.
// 2. Remember that Arrays start at position 0!

// function whosPaying(names) {
// /******Don't change the code above*******/
//     //Write your code here.
//     var randomNum = Math.floor(Math.random() * names.length);
//     return names[randomNum] + " is going to buy lunch today!";
// /******Don't change the code below*******/    
// }


//----------------------------------------
//99 Bottles beer song challange
// function lyrics99(){
//     var totallBottles = 99;
//     var originalBottlesNumber = totallBottles;
//     while (totallBottles > 0){
//         console.log(totallBottles + " bottles of bear on the wall, " + totallBottles + " bottles of beer.");
//         totallBottles--;
//         if(totallBottles != 0){
//            console.log("Take one down and pass it around, " + totallBottles + " bottles of bear on the wall");
//         } else {
//             console.log("Take one down and pass it around, no bottles of bear on the wall");
//             console.log("No more bottles of beer on the wall, no more bottles of beer.");
//             console.log("Go to the store and buy some more, " + originalBottlesNumber + " bottles of beer on the wall.");
//         }
//     }
// }

//----------------------------------------------------------BIG Challenge - FibonacciGenerator-----------------------------------------------------------
function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        var output = [];
        for(var i = 1; i<= n; i++){
            if (i == 1){
                output.push(0);
            } else if (i == 2){
                output.push(1);
            } else {
                var sumOfLastTwo = output[i-3] + output[i-2];
                output.push(sumOfLastTwo);
            }
        }
        //Return an array of fibonacci numbers starting from 0.
        return output;
    //Do NOT change any of the code below 👇
    }