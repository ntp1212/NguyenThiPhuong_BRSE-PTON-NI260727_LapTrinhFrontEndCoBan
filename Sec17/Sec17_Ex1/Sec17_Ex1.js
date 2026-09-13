let btn1 = document.getElementById("hide-btn");
let btn2 = document.getElementById("show-btn");

let textH1 = document.querySelector('h1');
console.log(textH1);

btn1.onclick = function() {
   textH1.style.display = "none"
}
btn2.onclick = function() {
   textH1.style.display = "block"
}
