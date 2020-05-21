const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log(`1. Est-ce que tous les livres ont été au moins empruntés une fois ?`); {
  for(let find in books) {
      if (books[find].rented >= 1) {
      console.log(`Tous les livres ont déjà été empruntés au moins une fois.`);
      }
      else {
          console.log("Un livre ou plus n'a pas été emprunté au moins une fois.");
      }
  }
}

console.log(`2. Le livre le plus emprunté ?`); {
  for( let rent in books) {
      books.sort(function(a, b) {
          if(a.rented > b.rented) { return -1; }
          if(a.rented < b.rented) { return 1; }
          return 0; } )
          title = books[0].title // 0 = the most rented book 
          console.log(`Le livre "${title}" est le plus emprunté.`);
      }
}

console.log(`3. Quel est le livre le moins emprunté ?`);{
  for( let rent in books) {
    books.sort(function(a, b) {
        if(a.rented < b.rented) { return -1; }
        if(a.rented > b.rented) { return 1; }
        return 0; } )
        title = books[0].title // 0 = the less rented book 
        console.log(`Le livre "${title}" est le moins emprunté.`);
    }
}

console.log(`4. Trouve le livre avec l'ID: 873495`); {
  let find = books.find(books => books.id == 873495)
  console.log(find)
}

console.log(`5. Supprime le livre avec l'ID: 133712`); {
  for(let find in books) {
    if (books[find].id === 133712) 
    books.splice(find, 1);        
}
}

console.log(`6. Trie les livres par ordre alphabétique`); {

