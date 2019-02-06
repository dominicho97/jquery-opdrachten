// base salary
function myFunction() {
  alert(
    "De netto loon bedraagt " +
      (document.getElementById("input1").value -
        (document.getElementById("input1").value * 30) / 100 +
        " euro")
  );
}
