const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {

    //vai no array alunos e procura o aluno com includes
    //O includes() retorna true ou false, dependendo se o valor passado como parâmetro está presente ou não no array
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        //console.log(`${aluno} esta cadastrado!`);

        //procura no array de alunos indexOf retorna a posição
        //O includes() retorna true ou false, dependendo se o valor passado como parâmetro está presente ou não no array
        const indice = listaDeAlunosEMedias[0].indexOf(aluno);
        //console.log(indice);

        const mediaDoAluno = listaDeAlunosEMedias[1][indice];
        //console.log(mediaDoAluno);

        console.log(`O ${aluno} tem a nota ${mediaDoAluno}`);


    } else {
        console.log(`${aluno} não encontrado!`);
    }
}

exibeNomeENota("João");
exibeNomeENota("Ana");