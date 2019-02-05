//+button
let button = document.getElementById("plus"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = " " + count;
};

//-button
let button2 = document.getElementById("min"),
  count2 = 0;
button2.onclick = function() {
  count = -1;
  button2.innerHTML = " " + count2;
};
