const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach(function(nota,index) {
   somaDasNotas += nota;
   console.log(index);
});
// Uma função que recebe um elemento.

// Certo! Essa função tem o nome de callback e vai ser executada para cada elemento do array, sendo que pode receber de 1 a 3 argumentos; o elemento, o índice e o array atual, respectivamente

const media = somaDasNotas / notas.length;

console.log(`A soma das notas é ${somaDasNotas} e a media é ${media}`);