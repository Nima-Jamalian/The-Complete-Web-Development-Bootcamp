// const fs = require("fs");
// fs.copyFileSync("file.txt","file2.text");

var superheroes = require("Superheroes");
var mySuperheroName = superheroes.random();
console.log("Hero name: " + mySuperheroName);

var supervillains = require("supervillains");
var mySuperVillainName = supervillains.random();
console.log("Villain name: " + mySuperVillainName);