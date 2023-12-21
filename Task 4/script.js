/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json'

async function getData() {
  try {
    const res = await fetch(ENDPOINT)
    const data = await res.json()

    carsData(data)
  } catch (error) {
    console.error('Klaida:', error)
  }
}

function carsData(data) {
  const outputDiv = document.getElementById('output')

  data.map((carBrand) => {
    const card = createCard(carBrand)
    outputDiv.appendChild(card)
  })
}

function createCard(carBrand) {
  const brandCard = document.createElement('div')
  brandCard.classList.add('brand-card')

  const brandName = document.createElement('h2')
  brandName.textContent = carBrand.brand

  const modelsList = document.createElement('ul')
  carBrand.models.map((model) => {
    const modelItem = document.createElement('li')
    modelItem.textContent = model
    modelsList.appendChild(modelItem)
  })

  brandCard.appendChild(brandName)
  brandCard.appendChild(modelsList)

  return brandCard
}

getData()