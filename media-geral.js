const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala){
   const somaDasNotas = notasDaSala.reduce((acumulador,nota) => {
        return acumulador + nota;
    }, 0);//parametro do acumulador
    //console.log(somaDasNotas);

    //ou
    //const somaDasNotas = notasDaSala.reduce((acc,nota) => acc + nota, 0);

    const medias = somaDasNotas / notasDaSala.length;

    return medias;

}

console.log(`A  media da sala de JavaScript é ${calculaMedia(salaJS)}`);
console.log(`A  media da sala de Java é ${calculaMedia(salaJava)}`);
console.log(`A  media da sala de Python é ${calculaMedia(salaPython)}`);

const numeros = [43, 50, 65, 12]

const soma = numeros.reduce((acc, atual) => atual + acc, 0)

//ou
// function operacaoNumerica(acc, atual) {
//     return atual + acc
//    }
   
//    const soma = numeros.reduce(operacaoNumerica, 0)

console.log(soma) //170

// O código acima é muito parecido com o que foi feito durante a aula. É importante notar que:

// O método reduce() está trabalhando com dois parâmetros. O primeiro é a função callback obrigatória para retornar o cálculo e o segundo parâmetro é um número que representa o valor inicial do acumulador – no caso, 0.
// A função callback foi escrita diretamente dentro do reduce(), e esta função também está recebendo dois parâmetros, ambos obrigatórios: o valor acumulado e o valor atual.
// A função callback foi escrita na forma de arrow function; nesse caso, quando só temos uma linha de instrução dentro da função (atual + acc) não precisamos usar chaves e nem da palavra-chave return.

// O código acima é muito parecido com o que foi feito durante a aula. É importante notar que:

// O método reduce() está trabalhando com dois parâmetros. O primeiro é a função callback obrigatória para retornar o cálculo e o segundo parâmetro é um número que representa o valor inicial do acumulador – no caso, 0.
// A função callback foi escrita diretamente dentro do reduce(), e esta função também está recebendo dois parâmetros, ambos obrigatórios: o valor acumulado e o valor atual.
// A função callback foi escrita na forma de arrow function; nesse caso, quando só temos uma linha de instrução dentro da função (atual + acc) não precisamos usar chaves e nem da palavra-chave return.