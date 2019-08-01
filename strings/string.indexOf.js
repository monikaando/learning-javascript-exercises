var phrase = 'czy to kot, czy coś innego ? ';
var index = phrase.indexOf('kot');
console.log('Słowo kot zapisano, zaczynając od indeksu ' + index);
index = phrase.indexOf('czy', 7);
console.log('Słowo czy zapisano, zaczynając od indeksu ' + index); /*it skips the first czy*/
index = phrase.indexOf('pies');
console.log('Słowo pies zapisano, zaczynając od indeksu ' + index);