//alert("working");

$(document).ready(function(){
    $("h1").css("color","red");
})
    

$("h1").addClass("big-title");

$("h1").click(function(){
    $("h1").css("color","purple");
});


$("button").on("click",function(){
    $("h1").css("color","purple");
});

$("input").keydown(function(event){
    console.log(event.key);
    $("h1").text(event.key);
});