const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {

    //vai no array alunos e procura o aluno com includes
    if (alunos.includes(aluno)) {
        //console.log(`${aluno} esta cadastrado!`);

        // const alunos = listaDeAlunosEMedias[0];
        // const medias = listaDeAlunosEMedias[1];
        const [alunos, medias] = listaDeAlunosEMedias;

        //procura no array de alunos indexOf retorna a posição
        const indice = alunos.indexOf(aluno);
        //console.log(indice);

        const mediaDoAluno = medias[indice];
        //console.log(mediaDoAluno);

        console.log(`O ${aluno} tem a nota ${mediaDoAluno}`);


    } else {
        console.log(`${aluno} não encontrado no sistema!`);
    }
}

exibeNomeENota("João");
exibeNomeENota("Ana");
exibeNomeENota("Everaldo");