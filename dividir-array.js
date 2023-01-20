const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

//faciar dividir
//0 posição até a 9 posição , não conta o 10°aluno
//const sala1 = alunos.slice(0,10);
const sala1 = alunos.slice(0, alunos.length / 2);

console.log(sala1);
//pega do 10° posição até o fim do array
//const sala2 = alunos.slice(10);
const sala2 = alunos.slice(alunos.length / 2);

console.log(sala2)