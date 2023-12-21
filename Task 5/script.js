/* ------------------------------ TASK 5 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atliks nurodytas užduotis
1. funkcija "filterDogOwers" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins "users", kurie turi augintini.
2. funkcija "filterAdults" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins masyvą su "users", kurie yra pilnamečiai.
-------------------------------------------------------------------------- */

const users = [
  { id: '1', name: 'John Smith', age: 20, hasDog: true },
  { id: '2', name: 'Ann Smith', age: 24, hasDog: false },
  { id: '3', name: 'Tom Jones', age: 31, hasDog: true },
  { id: '4', name: 'Rose Peterson', age: 17, hasDog: false },
  { id: '5', name: 'Alex John', age: 25, hasDog: true },
  { id: '6', name: 'Ronald Jones', age: 63, hasDog: true },
  { id: '7', name: 'Elton Smith', age: 16, hasDog: true },
  { id: '8', name: 'Simon Peterson', age: 30, hasDog: false },
  { id: '9', name: 'Daniel Cane', age: 51, hasDog: true },
]

const filterDogOwers = () => {
  const usersWithDogs = users.filter(user => user.hasDog === true)
  appendToTable(usersWithDogs, "Vartotojai(users), kurie turi augintinį.")
  console.log(usersWithDogs)
}

const filterAdults = () => {
  const adults = users.filter(user => user.age >= 18)
  appendToTable(adults, "Vartotojai(users), kurie yra pilnamečiai.")
  console.log(adults)
};

const appendToTable = (data, tableName) => {
  const table = document.createElement('table')
  const headerRow = table.insertRow(0)
  const headerCell1 = headerRow.insertCell(0)
  const headerCell2 = headerRow.insertCell(1)
  headerCell1.textContent = 'Name'
  headerCell2.textContent = 'Age'

  data.map(user => {
    const row = table.insertRow(-1)
    const cell1 = row.insertCell(0)
    const cell2 = row.insertCell(1)
    cell1.textContent = user.name
    cell2.textContent = user.age
  })

  const lentele = document.createElement('div')
  lentele.textContent = tableName
  lentele.appendChild(table)
  document.body.appendChild(lentele)
}

filterDogOwers()
filterAdults()

