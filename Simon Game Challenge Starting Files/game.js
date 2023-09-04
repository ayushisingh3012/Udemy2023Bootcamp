/*alert("hi");  -test js*/

// console.log($("h1").html());  -test jQuery

const buttonColours=["red", "blue", "green", "yellow"];
let userClickedPattern=[];

let gamePattern=[];
let started=false;
let level=0;

//function to start the game when a key is pressed.
$(document).keydown(function(event){
    if(!started){
        nextSequence();
        // console.log(event.key);
        started=true;
    }        
});

//function to continue the game at each level,
//remembers the pattern of user clicked buttons
//tells user what button he clicked by flashing the button
$(".btn").click(function(){
    
    const userChosenColor=$(this).attr("id");  
    // console.log("userChosenColor: "+userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    userClickedPattern.push(userChosenColor);
    console.log("userClickedPattern in play= "+userClickedPattern);

    checkAnswer(userClickedPattern.length-1);
});

//plays unique sound for each button
function playSound(name){
    let audio=new Audio('sounds/'+name+'.mp3');
    audio.play();
}

//adds animation on buttons : flash them
function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");

    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },100); 
    //this means that...it will wait for 100ms before calling the remove class function.
}

//restarts the game if user clicks wrong button i.e., breaks the pattern
function startOver(){
    level=0;
    gamePattern=[];
    userClickedPattern=[];
    started=false;
}

//shows the random color button user has to start with at begining
//also adds new random color for user to remember in the sequence at each New Level
function nextSequence(){
    $("#level-title").text("LEVEL "+level);
    console.log("level: "+level);

    let randomNumber = Math.floor(Math.random()*4);
    // console.log("randomNumber: "+randomNumber);

    let randomChosenColor = buttonColours[randomNumber];
    // console.log("randomChosenColor="+randomChosenColor);
    
    gamePattern.push(randomChosenColor);
    console.log("gamePattern= "+gamePattern);

    $("#"+randomChosenColor).click(function(){
        $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeIn(100);
    });

    playSound(randomChosenColor);
    animatePress(randomChosenColor); 
    
    level++;
}

//checks whether user entered the right pattern or not
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        console.log("SUCCESS");
        if(gamePattern.length===userClickedPattern.length){
           setTimeout(nextSequence(),1000);
           userClickedPattern=[];
           console.log("userClickedPattern Reset for next level= "+userClickedPattern);
        }
    }
    else{
        playSound("wrong");
        console.log("WRONG");

        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);

        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}







