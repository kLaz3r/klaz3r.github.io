
function love() {
 var result = document.getElementById("result")
 var input = document.getElementById("nume").value;
 if (input === "Dana") {
  result.innerHTML = "Te iubeste enorm de mult";
 } else if (input === "dana") {
   result.innerHTML = "Te iubeste enorm de mult";
 } else if (input === "Dana Obreja") {
   result.innerHTML = "Te iubeste enorm de mult";
 } else if (input === "dana obreja") {
   result.innerHTML = "Te iubeste enorm de mult";
 } else if (input === "gabi") {
   result.innerHTML = "Te pup la portofel";
   }
 else {
  result.innerHTML =
   "Nu te iubeste te drq de coarda";
 }
 console.log(input);
}