/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const output = document.getElementById("output")
const form = document.querySelector("form")
const input = document.getElementById("search")

form.addEventListener("submit", function (e) {
    e.preventDefault()
    const kg = parseFloat(input.value)
    
    if (isNaN(kg)) {
      alert("Įveskite skaičių. :) ")
      return
    }
  
    const lb = kg * 2.2046
    const g = kg / 0.001
    const oz = kg * 35.274
  
    output.innerHTML = `
      <h1>Įvestas svoris ${kg.toFixed(2)} (kg):</h1>
      <hr>
      <p><strong>Svarais:</strong> ${lb.toFixed(2)} (lb)</p>
      <p><strong>Gramais:</strong> ${g.toFixed(2)} (g)</p>
      <p><strong>Uncijomis:</strong> ${oz.toFixed(2)} (oz)</p>
    `

    input.value = ""
})
  