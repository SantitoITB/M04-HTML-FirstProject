function _1() {
  let FN = +document.getElementById("_1_FN").value
  let SN = +document.getElementById("_1_SN").value
  window.alert(Math.max(FN,SN))
}

function multiply(x,y) {
  if (y == 0) {
    return 0
  } else if (y < 0) {
    return -(x - multiply(x,y+1))
  } else {
    return x + multiply(x,y-1)
  }
}

function _2() {
  let FN = +document.getElementById("_2_FN").value
  let SN = +document.getElementById("_2_SN").value
  window.alert(multiply(FN,SN))
}

function multiply3(x,y,z) {
  let a = multiply(x,y)
  return multiply(a,z)
}

function _3() {
  let FN = +document.getElementById("_3_FN").value
  let SN = +document.getElementById("_3_SN").value
  let TN = +document.getElementById("_3_TN").value
  window.alert(multiply3(FN,SN,TN))
}

function _4() {
  let arr = []
  for (let i = 1; i < 10000 ; i++) {
    let result = 0

    let digits = i.toString().split('');
    let realDigits = digits.map(Number);

    for (const element of realDigits){
      result += element * element * element 
    }
    

    if (result == i){
      arr.push(result)
    }
 }
 window.alert(arr)
}