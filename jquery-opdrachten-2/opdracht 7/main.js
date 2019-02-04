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

// sets third chld of ol li to bold
$("ol li:nth-child(3)").click(function() {
  $("ol li:nth-child(3)").css("font-weight", "bold");
});
