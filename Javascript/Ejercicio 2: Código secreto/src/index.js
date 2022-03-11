/*
  * Genera una variable codigoSecreto de tipo array de 5 número 
  * aleatorios entre 1 y 10 usando la libreria Math.random();
*/

function generateRandomArray() {
  return Array.from({length: 5}, () => Math.floor(Math.random() * 10));
}

/*
  * Programa la función que te indique cuantas veces sale un número 
  * concreto (se lo podemos pedir al usuario) dentro del array. 
*/

function getOccurrence(array, value) {
  return array.filter((v) => (v === value)).length;
}

/*
  * Crea un algoritmo para que nos indique
  * para cada posición cuantas veces sale ese número
*/

function getAllIndexes(arr, val) {
  var indexes = [], i = -1;
  while ((i = arr.indexOf(val, i+1)) != -1){
      indexes.push(i);
  }
  return indexes;
}

function pushOK(arr,userarr) {
  let okarray = [];


  for (let i of userarr) {
    if (userarr[i] == arr[i]) {
      okarray[i] = "OK";
    } else {
      okarray[i] = "BAD";
    }
  }
  
  return okarray
}

function askUser() {
  let fnumber = +prompt("Enter your first number")
  let snumber = +prompt("Enter your second number")
  let tnumber = +prompt("Enter your third number")
  let fonumber = +prompt("Enter your fourth number")
  let finumber = +prompt("Enter your fifth number")

  return [fnumber,snumber,tnumber,fonumber,finumber];
}

function main(){

  let arr = generateRandomArray();
  console.log(arr);


  let okarray = [];
  let rounds = 1;
  do {
    let userarr = askUser();
    okarray = pushOK(arr,userarr);
    console.log(okarray);
    console.log([ "OK", "OK", "OK", "OK", "OK" ]);
    console.log(okarray == [ "OK", "OK", "OK", "OK", "OK" ])
    document.getElementById("arrPrint").innerHTML = okarray;
    console.log(rounds);
    rounds++;
  }
  while(rounds < 5) 

  
}
