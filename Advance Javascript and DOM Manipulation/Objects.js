//Creating Objects
var employee = {
    name: "Nima Jamalian",
    age: 26,
    hasWorkPermit: true,
    languages: ["French", "English"],
    //custome function
    work: function() {
       alert("Start progamming...");
    }
}

//Constructor Funcation
//start with captial
function Employee (name,age,hasWorkPermit,languages){
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    //custome function
    this.work = function(){
        alert("Start progamming...");
        //other function
    }
}

//how to use it
var employee1 = new Employee("Viola Li",29,true,["Chinese","English"]);

//if we don't use constructor we need to creat the objects one by one which take long to write
//Example
// var employee1 = {
//     name: "Viola Li",
//     age: 29,
//     hasWorkPermit: true,
//     languages: ["Chinese","English"]
// }
alert("Hello my name is " + employee1.name);
employee.work();