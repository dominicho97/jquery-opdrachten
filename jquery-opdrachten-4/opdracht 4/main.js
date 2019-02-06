//inputs
let valueInput1 = document.getElementById("input1");
let valueInput2 = document.getElementById("input2");
let valueInput3 = document.getElementById("input3");
let valueInput4 = document.getElementById("input4");
let valueInput5 = document.getElementById("input5");
let valueInput6 = document.getElementById("input6");
//button
let button = document
  .getElementById("button1")
  .addEventListener("click", myFunction);

//button trigger+input values
function myFunction() {
  console.log(
    valueInput1.value +
      " " +
      valueInput2.value +
      ", Geboren op " +
      valueInput3.value +
      ",  " +
      valueInput4.value +
      ", momenteel een " +
      valueInput5.value +
      " in " +
      valueInput6.value
  );
}
