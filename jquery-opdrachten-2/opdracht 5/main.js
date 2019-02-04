$("#first_name").blur(function() {
  $("#name").css("border", "1px solid red"); // red border appears on name if I click on first name
});

$("#name").blur(function() {
  $("#first_name").css("border", "1px solid red"); // red border appears on first name if I click on name
});

/*// green focus
$("#first_name").blur(function() {
  $("#first_name").css("border", "1px solid green");*/

$("#first_name").click(function() {
  $("#first_name").css("border", "1px solid green"); // red border appears on name if I click on first name
});

$("#name").click(function() {
  $("#name").css("border", "1px solid green"); // red border appears on first name if I click on name
});
