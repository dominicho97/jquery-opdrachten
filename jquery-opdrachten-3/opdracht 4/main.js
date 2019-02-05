// adds 10px to the rectangle
$(".btn1").click(function() {
  $("#rectangle").css("height", "100px");
});

// changes color to green
$(".btn2").click(function() {
  $("#rectangle").css("background", "green");
});

// reset color to red
$(".btn3").click(function() {
  $("#rectangle").css("background", "red");
});

// hide rectangle
$(".btn4").click(function() {
  $("#rectangle").hide();
});

// show rectangle
$(".btn5").click(function() {
  $("#rectangle").show();
});
