// base salary -30%
function myFunction() {
  alert(
    "De netto loon bedraagt " +
      (document.getElementById("input1").value -
        (document.getElementById("input1").value * 30) / 100 +
        " euro")
  );
}

/*let gender = document.getElementById("input2").value;
if (gender === "female") {
  console.log("wijf");*/
}
