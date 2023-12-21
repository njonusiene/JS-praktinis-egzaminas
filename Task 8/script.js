/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator() {}

Calculator.prototype.sum = function(a, b) {
  return a + b
}

Calculator.prototype.subtraction = function(a, b) {
  return a - b
}

Calculator.prototype.multiplication = function(a, b) {
  return a * b
}

Calculator.prototype.division = function(a, b) {
  if (b !== 0) {
    return a / b
  } else {
    console.error("Dalyba iš nulio negalima, susiprask :)")
    alert ("Dalyba iš nulio negalima, susiprask :)")
    return undefined
  }
}

var calculator = new Calculator()

var a = parseFloat(prompt("Įveskite pirmą skaičių:"))
var b = parseFloat(prompt("Įveskite antrą skaičių:"))

if (!isNaN(a) && !isNaN(b)) {
  var sumResult = calculator.sum(a, b).toFixed(2)
  var sumResult1 = calculator.subtraction(a, b).toFixed(2)
  var sumResult2 = calculator.multiplication(a, b).toFixed(2)
  var sumResult3 = calculator.division(a, b).toFixed(2)

  var resultsContainer = document.getElementById("results")
  resultsContainer.innerHTML = 
  `
    <p>Įvesti skaičiai: ${a} ir ${b}</p>
    <p>Sudėties suma: ${sumResult}</p>
    <p>Atimties suma: ${sumResult1}</p>
    <p>Daugybos suma: ${sumResult2}</p>
    <p>Dalybos suma: ${sumResult3}</p>
  `
} else {
  alert ("Įvedėte ne skaičių!")
  console.error("Įvedėte ne skaičių!")
}

