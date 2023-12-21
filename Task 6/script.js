/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis
1. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..]
2. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus visurkį kaip skaičių.
-------------------------------------------------------------------------- */

const users = [
  { id: '1', name: 'John Smith', age: 20 },
  { id: '2', name: 'Ann Smith', age: 24 },
  { id: '3', name: 'Tom Jones', age: 31 },
  { id: '4', name: 'Rose Peterson', age: 17 },
  { id: '5', name: 'Alex John', age: 25 },
  { id: '6', name: 'Ronald Jones', age: 63 },
  { id: '7', name: 'Elton Smith', age: 16 },
  { id: '8', name: 'Simon Peterson', age: 30 },
  { id: '9', name: 'Daniel Cane', age: 51 },
]

const getNames = () => {
  const userNames = users.map(user => user.name)
  return userNames
}

const appendTo = (text) => {
  const p = document.createElement('p')
  p.textContent = text
  document.body.appendChild(p)
}

const userNames = getNames()
appendTo("Naujas masyvas: [" + userNames.join(', ') + "]")
console.log(userNames)

const getAverageAge = () => {
  const totalAge = users.reduce((sum, user) => sum + user.age, 0)
  const averageAge = (totalAge / users.length).toFixed(0)
  return averageAge
}

appendTo("Amžiaus vidurkis: " + getAverageAge() + " m. (amžius suapvalintas nepaliekant skaičiaus po kablelio")
console.log("Amžiaus vidurkis: " + getAverageAge() + " m. (Amžius suapvalintas nepaliekant skaičiaus po kablelio")

