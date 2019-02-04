//sets first child of ol li to 120%
$("ol li").click(function() {
  $("ol li")
    .first()
    .css("font-size", "120%");
});

// sets second child of ol li to 80%
$("ol li:nth-child(2)").click(function() {
  $("ol li:nth-child(2)").css("font-size", "80%");
});

// changes words with class green to bold
$("ol li:nth-child(3)").click(function() {
  $(".green").css("font-weight", "bold");
});

// sets word with class red in underline
$("ol li:nth-child(4)").click(function() {
  $(".red").css("text-decoration", "underline");
});

// sets word with class red in underline//??
$("ol li:nth-child(5)").mouseover(function() {
  $("#content").css("content", "images/koala.png");
});
