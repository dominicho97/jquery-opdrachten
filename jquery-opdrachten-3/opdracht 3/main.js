let random = Math.ceil(Math.random() * 100);

$("#clickme").click(function() {
  alert(random);
});

let answer = document.getElementById("number");
$("input").keydown(function() {
  console.log(answer);
});
