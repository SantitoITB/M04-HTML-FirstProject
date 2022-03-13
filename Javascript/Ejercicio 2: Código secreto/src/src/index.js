window.addEventListener("DOMContentLoaded", (event) => {
  main();
});

function generateRandomArray() {
  return Array.from({ length: 5 }, () => Math.floor(Math.random() * 10));
}

function askUser(arrSize) {
  let arr = prompt("Enter", "Example: 1,2,3,4,5").split(",").map(Number);
  while (arr.length != arrSize) {
      alert("the length of the array must be " + arrSize);
      arr = prompt("Enter", "Example: 1,2,3,4,5").split(",").map(Number);
  }
  return arr;
}

function arrayEquals(a, b) {
  return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, index) => val === b[index]);
}

function itsOK(userarr, randomarr) {
  let ok = new Array();
  for (let i = 0; i < randomarr.length; i++) {
      if (randomarr[i] == userarr[i]) {
          ok.push("OK");
      } else {
          ok.push("BAD");
      }
  }
  return ok;
}

function game(rounds, mysteriousArray) {
  let round = 0;
  console.log(mysteriousArray);

  while (round < rounds) {
      let userTry = askUser(mysteriousArray.length);
      round++;
      let attempt = round + " attempt : " + userTry;
      document.getElementById("attempts").innerHTML += "<h5>" + attempt + "</h5>";
      if (arrayEquals(userTry, mysteriousArray)) {
          document.getElementById("print").innerHTML = "You Win!!";
          return;
      } else {
          document.getElementById("print").innerHTML = itsOK(userTry, mysteriousArray);
      }
  }
  document.getElementById("print").innerHTML = "You lose";
}

function main() {
  let mysteriousArray = generateRandomArray(5, 10);
  let rounds = 5;
  game(rounds, mysteriousArray);
}
