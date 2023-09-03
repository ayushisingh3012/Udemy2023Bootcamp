/*alert("hi");  -test js*/

// console.log($("h1").html());  -test jQuery

let gamePattern=[];
let buttonColours=["red", "blue", "green", "yellow"];

function nextSequence(){
    let randomNumber = Math.floor(Math.random()*4);
    console.log(randomNumber);

    let randomChosenColor = buttonColours[randomNumber];
    console.log(randomChosenColor);
    
    gamePattern.push(randomChosenColor);
    console.log(gamePattern);

    $("#"+randomChosenColor).click(function(){
        $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeIn(100);
    });

    let audio=new Audio('sounds/'+randomChosenColor+'.mp3');
    audio.play();
}

$(".btn").click(nextSequence);





