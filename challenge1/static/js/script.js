//Challenge 1: Your Age in Days

function ageInDays() {
  let birthYear = prompt("What year were you born ... good friend?");
  let ageInDayss = (2021 - birthYear) * 365;
  var h1 = document.createElement("h1");
  //creating text
  let textAnswer = document.createTextNode(
    "You are " + ageInDayss + " days old"
  );
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
  document.getElementById("ageInDays").remove();
}
