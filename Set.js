const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

//classe
//não pode ter itens duplicados
const meuSet = new Set(nomes);

console.log(meuSet);

const nomesAtualizados = [...meuSet];

console.log(nomesAtualizados);

//ou
// const nomesAtualizados = [...new Set(nomes)];
//console.log(nomesAtualizados);
