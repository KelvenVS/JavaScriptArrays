const notas = [10, 9.5, 8, 7, 6];

//reescrever arrays
const notasAtualizadas = notas.map((nota) => {
    //operador ternario
    //caso  condição       true  false
    return nota + 1 >= 10 ? 10 : nota + 1;
})

console.log(notas);
console.log(notasAtualizadas);