document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37:
      //left
      $("#square").css("right", " 10px");
      break;
    case 38:
      //top
      $("#square").css("top", " -10px");

      break;
    case 39:
      //right
      {
        $("#square").css("left", " 10px");
      }
      break;
    case 40:
      //alert("down");
      $("#square").css("top", " 10px");
      break;
  }
};
