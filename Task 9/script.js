/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu. Tuomet, atspausdinkite du filmus,
kurių vienas duotų false, kitas true ir atspausdintų atitinkamus variantus. Pvz., 
"Avengers: Endgame" biudžetas viršyjo 100 mln. USD
"Mr. Nobody" biudžetas neviršyjo 100 mln. USD

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */
class Movie {
    constructor(title, director, budget) {
      this.title = title
      this.director = director
      this.budget = budget
    }
  
    wasExpensive() {
      return this.budget > 100000000
    }
  }
  
  const avengers = new Movie("Avengers: Endgame", "Anthony and Joe Russo", 356000000)
  const mrNobody = new Movie("Mr. Nobody", "Jaco Van Dormael", 35000000)
  const titanic = new Movie("Titanic", "James Cameron", 200000000)
  
  console.log(`${avengers.title} biudžetas ${avengers.wasExpensive() ? 'viršijo' : 'neviršijo'} 100 mln. USD`)
  console.log(`${mrNobody.title} biudžetas ${mrNobody.wasExpensive() ? 'viršijo' : 'neviršijo'} 100 mln. USD`)
  console.log(`${titanic.title} biudžetas ${titanic.wasExpensive() ? 'viršijo' : 'neviršijo'} 100 mln. USD`)
  