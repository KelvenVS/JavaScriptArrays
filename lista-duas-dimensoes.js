const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

console.log(listaDeAlunosEMedias);
                                                // 0 seleciona entre as listas depois seleciona a posição no array
console.log(`A aluna da posição 1 da lista é: ${listaDeAlunosEMedias[0][1]}.
A nota dessa aluna é ${listaDeAlunosEMedias[1][1]} `);

const nomes = ["Ana", "Juliana", "Leonardo"];
const idades = [30, 35, 28];
const faculdade = [false, true, true];

const funcionarios = [nomes, idades, faculdade];

console.log(`O nome do funcionario é ${funcionarios[0][2]}`);//leonardo
console.log(`A idade do funcionario é ${funcionarios[1][2]}`);//28 anos
console.log(`Ele faz faculdade ? ${funcionarios[2][2]}`);//true

//console.log(`${funcionarios[0][2]} tem idade ${funcionarios[1][2]}`);
//Para imprimir o nome, acessamos a lista de nomes escrevendo funcionarios[0] e, logo em seguida, adicionamos [2] para acessar o nome da posição 2. Para imprimir a idade, acessamos a lista de idades escrevendo funcionarios[1] e, logo em seguida, adicionamos [2] para acessar a idade da posição 2.

