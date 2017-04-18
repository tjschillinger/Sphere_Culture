$("#value-1").click(function(){
    $("#value-1-reveal").toggle("hidden");
    $(".value-top-box").toggleClass("active");
    $(".audio-1").toggleClass("hidden");

});

$("#value-2").click(function(){
    $("#value-2-reveal").toggle("hidden");
    $(".value-middle-box").toggleClass("active");
    $(".audio-2").toggleClass("hidden");

});

$("#value-3").click(function(){
    $("#value-3-reveal").toggle("hidden");
    $(".value-middle-box-2").toggleClass("active");
    $(".audio-3").toggleClass("hidden");
});

$("#value-4").click(function(){
    $("#value-4-reveal").toggle("hidden");
    $(".value-middle-box-3").toggleClass("active");
    $(".audio-4").toggleClass("hidden");
});

$("#value-5").click(function(){
    $("#value-5-reveal").toggle("hidden");
    $(".value-middle-box-4").toggleClass("active");
    $(".audio-5").toggleClass("hidden");
});

$("#value-6").click(function(){
    $("#value-6-reveal").toggle("hidden");
    $(".value-middle-box-5").toggleClass("active");
    $(".audio-6").toggleClass("hidden");
});

$("#value-7").click(function(){
    $("#value-7-reveal").toggle("hidden");
    $("#value-7").toggleClass("flat-bottom");
    $(".value-bottom-box").toggleClass("active");
    $(".audio-7").toggleClass("hidden");
});

$(document).ready(function(){
    $("#value-1-reveal").addClass("hidden");
    $("#value-2-reveal").addClass("hidden");
    $("#value-3-reveal").addClass("hidden");
    $("#value-4-reveal").addClass("hidden");
    $("#value-5-reveal").addClass("hidden");
    $("#value-6-reveal").addClass("hidden");
    $("#value-7-reveal").addClass("hidden");
});