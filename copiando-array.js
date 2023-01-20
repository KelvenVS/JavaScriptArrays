// const notas = [7, 7, 8, 9];

// const novasNotas = notas;

// novasNotas.push(10);
// notas.push(5);
// o java considera o mesmo endereço da memória
//atribuição por referência
// console.log(`As novas notas são ${novasNotas}`);
// console.log(`As notas originais são ${notas}`);

//------------------------------------------------------------------------//

// const notas = [7, 7, 8, 9];
// //Spread syntax (...) // espalhamento
// const novasNotas = [...notas];

// novasNotas.push(10);
// notas.push(5);

// console.log(`As novas notas são ${novasNotas}`);
// console.log(`As notas originais são ${notas}`);

//------------------------------------------------------------------------//

const notas = [7, 7, 8, 9];
//Spread syntax (...) // espalhamento
const novasNotas = [5, ...notas, 10];
//adiciona no inicio ou final do array

// novasNotas.push(10);
// notas.push(5);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);

//------------------------------------------------------------------------//

// let num1 = 10;
// let num2 = num1;

// num2 += 5;// num2 vale 10 e soma com 5
// num1 += 1;// como foi declarado let num1 passa a valer 1

// console.log(`Num1 é ${num1}. Num2 é ${num2}`);

//------------------------------------------------------------------------//

// let numeroOriginal = 10;

// function alteraNumero(numero) {
//     numero = 50;

//     console.log(`numero do parâmetro é ${numero}. numeroOriginal é ${numeroOriginal}`);
// }

// alteraNumero(numeroOriginal);
// console.log(numeroOriginal);

//------------------------------------------------------------------------//

// const arrayOriginal = [7, 7, 8, 9];

// function alteraArray(array) {
//   array.push(10);

//   console.log(`array do parâmetro é ${array}`);
//   console.log(`arrayOriginal é ${arrayOriginal}`);
// }

// alteraArray(arrayOriginal);
// console.log(arrayOriginal);

//------------------------------------------------------------------------------//
//https://cursos.alura.com.br/course/javascript-arrays/task/114508

// const arrayOriginal = [7, 7, 8, 9];

// function alteraArray(array) {
//   array.push(10);

//   console.log(`array do parâmetro é ${array}`);
//   console.log(`arrayOriginal é ${arrayOriginal}`);
// }

// alteraArray([...arrayOriginal]);
// console.log(arrayOriginal);