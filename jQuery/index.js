// $(document).ready(function(){//check if the jQuery has been loaded before using it
//     $("h1").css("color","red");
// });

//don't need to do the check above since we declared the jQuery before javaScript in out code

// $("h1").css("color", "green");
// //console.log($("h1").css("color"));//would print out the color of selected object
// $("button");


//not a good practice to change the css value directly from javaScript instead 
//we are going to creat a class and add to the selected element

$("h1").addClass("bigTitle margin50");//you can add more than one class just use the space

//jQuery also alow us to check to see if an element has a certain class 
// 

$("h1").text("bye");
//when you select an element using jQuery it will select all the elements, with that name
$("button").text("Don't Click Me");


$("a").attr("href","https://uk.yahoo.com/");


//Adding Event listener using jQuery
$("h1").click(function (){
    $("h1").css("color","purple");
});

//Adding event listener to multiple buttons
$("button").click(function(){
    $("h1").css("color","purple");
    //jQuery pre built animation
    // $("h1").hide();
    // $("h1").toggles();
    // $("h1").fadeOut();
    // $("h1").fadeIn();
    // $("h1").fadeToggle();
    // $("h1").slideUp();
    // $("h1").slideDown();
    // $("h1").slideToggle();

    //we can also add out own custom animation using animate
    $("h1").animate({opacity: 0.5});

    //you can also chain up multiple animation and connect them together
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});

//checking for keypress in input
// $("input").keypress(function(event){
//     console.log(event.key);
// });

//checking for keypress in entire website
$(document).keypress(function(event){
    $("h1").text(event.key);
});

//another way of using event listener in jQuery is by using on
$("h1").on("mouseover",function(){//you need pass what you what to listen to for this example, it's mouseover
    $("h1").css("color","purple");
});


//Adding element using jQuery
//Adding element before another element
$("h1").before("<button>New</button>");
$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");
$("h1").after("<button>New</button>");

//Remove element using jquery
// $("button").remove();