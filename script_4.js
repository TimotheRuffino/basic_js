const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];



console.log(`1. Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70`); {
  for(let index in entrepreneurs) {
   if (entrepreneurs[index].year >= 1970 && entrepreneurs[index].year < 1980)
   console.log(entrepreneurs[index].first + " " + entrepreneurs[index].last);
   }
}


console.log(`2. Sors un array qui contient le prénom et le nom des entrepreneurs`); {
  for (let index in entrepreneurs) {
    console.log(entrepreneurs[index].first + " " + entrepreneurs[index].last);
  }
}

console.log(`3. Quel âge aurait chaque inventeur aujourd'hui ?`); {
  for (let index in entrepreneurs) {
    age = 2020 - entrepreneurs[index].year;
    name = entrepreneurs[index].first
    lastname = entrepreneurs[index].last
    console.log(`${name} ${lastname} aurait ou a ${age} ans `);
  }
}

console.log(`4. Trie les entrepreneurs par ordre alphabétique du nom de famille`); {
  for( let names in entrepreneurs) {
    entrepreneurs.sort(function(a, b) {
        if(a.last < b.last) { return -1; }
        if(a.last > b.last) { return 1; }
        return 0; } )
      console.log(entrepreneurs[names].first + " " + entrepreneurs[names].last);
     }
  }