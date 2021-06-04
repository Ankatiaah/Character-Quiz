//Button click event handlers
$(".tortise").click(function() {
    $("img").hide();
    $(".black").show();
    $("body").css("background-color", "#f2bdcd");
});

$(".dragon").click(function() {
    $("img").hide();
    $(".azure").show();
});

$(".bird").click(function() {
    $("img").hide();
    $(".vermilion").show();
});

$(".tiger").click(function() {
    $("img").hide();
    $(".white").show();
});

//Reset to default
$(".actions").mouseenter(function() {
    $("img").hide();
    $(".default").show();
    $("body").css("background-color", "#afe0ef");
});

$("button").click(function() {
  let mythologicalBeast= $(".pickFav").val();
    //alert("my favorite food is " + Write Here!);
    $(".choice").text(mythologicalBeast);
});

$("button").click(function() {
  let mythological= $(".Fav").val();
    //alert("my favorite food is " + Write Here!);
    $(".chosen").text(mythological);
});









