// var randomDiceImage="dice"+randomNumber1+".png";
// var randomImageSource="images/"+randomDiceImage;
// var image1 = document.querySelector(".dice .img1");
// var image1 = document.querySelectorAll("img")[0];

var randomNumber1 = Math.floor(Math.random()*6)+1;
var imageSource1 = document.querySelector(".img1");
imageSource1.setAttribute("src","images/dice"+randomNumber1+".png");

var randomNumber2 = Math.floor(Math.random()*6)+1;
var imageSource2 = document.querySelector(".img2");
imageSource2.setAttribute("src","images/dice"+randomNumber2+".png");

var msg=document.querySelector("h1");
if(randomNumber1>randomNumber2)
    msg.innerHTML="Player 1 Wins! 🚩";
else if(randomNumber2>randomNumber1)
        msg.innerHTML="Player 2 Wins! 🚩";
    else
        msg.innerHTML="Draw!";