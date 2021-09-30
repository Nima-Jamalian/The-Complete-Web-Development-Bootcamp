document.querySelector(".btn").style.backgroundColor = "red";//bad practice we should not change the CSS directly in JavaScript
document.querySelector("#title").classList.toggle("huge");


/*
innerHTML -> Returns everything inside the selected element -> it is useful so you can also change the style of text like strong or em(italicised)
textContent -> Returns only the text
document. querySelector ("h1" ). innerHTML;
"‹strong>Hello</strong>"

document. querySelector("h1"). textContent;
"Hello"

document. querySelector ("h1" ). innerHTML = "<em>Good Bye</em>"
"<em>Good Bye</em>";
*/
document.querySelector("#title").innerHTML = "<em> Good Bye! </em>";



document.querySelector("a").attributes.href.value = "https://www.bing.com/";