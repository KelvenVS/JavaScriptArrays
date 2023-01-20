const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((aluno,indice) =>{
    //return true or false;
    return medias[indice] >= 7;
})

//Não utiliza o parametro colocar underline  no caso fica apagado 
// const reprovados = alunos.filter((_,indice) =>{
//     //return true or false;
//     return medias[indice] >= 7;
// })

console.log(reprovados);