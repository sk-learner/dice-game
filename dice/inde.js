var randomimage1 = Math.floor(Math.random() *  6) + 1;
var imagesource = "images/dice" + randomimage1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", imagesource);
var randomimage2 = Math.floor(Math.random() *  6) + 1;
var imagesource = "images/dice" + randomimage2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", imagesource);

if(randomimage1>randomimage2){
document.querySelector("h1").innerHTML = "player 1 wins ! ";
}
else if (randomimage2>randomimage1){
document.querySelector("h1").innerHTML = "player 2 wins !"; 
}
else {
  document.querySelector("h1").innerHTML = "Draw";
}
