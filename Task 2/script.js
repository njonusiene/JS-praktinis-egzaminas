/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const text = document.getElementById("btn__element")
const count = document.getElementById("btn__state")
const btn = document.querySelector(".btn")

let clickCount = 0

btn.addEventListener("click", () => {
    clickCount++
    console.log(clickCount)
    count.textContent = clickCount
})

count.addEventListener("click", () => {
    clickCount = -1
    console.log("Skaičius išvalytas")
    count.textContent = clickCount
})