const nomes = ["Joâo", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

console.log(nomes);

//nomes.splice(posição,remove tantos,"Rodrigo");
//coloca o "Rodrigo no lugar"
nomes.splice(1, 3, "Rodrigo");
//nomes.push("Rodrigo");

console.log(nomes);


animaisDoAquario = ['🐋', '🐙', '🐬', '🦈'];

//foi na 1° posição do array , removeu ninguem e add o peixe
animaisDoAquario.splice(1, 0, '🐠');
console.log(animaisDoAquario);
//foi na 3° posição do array, retirou 2 elementos (2 golfinhos) e add o peixe azul
animaisDoAquario.splice(3, 2, '🐟');

console.log(animaisDoAquario);