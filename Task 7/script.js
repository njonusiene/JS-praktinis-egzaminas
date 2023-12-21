/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objectą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  marke: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
}

const showObjectKeys = (obj) => {
  return Object.keys(obj)
}

console.log(showObjectKeys(audi))

const showObjectValues = (obj) => {
  return Object.values(obj);
}

console.log(showObjectValues(audi))

