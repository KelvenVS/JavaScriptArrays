const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesPadronizados = nomes.map((nome) => {
    return nome.toUpperCase();
})   

//ou 
//const nomesPadronizados = nomes.map((nome) => nome.toUpperCase())   


console.log(nomesPadronizados);

const nome = "Alura";
let nomeMaiusculas = ""
console.log(nomeMaiusculas);

for (let i = 0; i < nome.length; i++) {
 nomeMaiusculas += nome[i].toUpperCase()
}
console.log(nomeMaiusculas) //ALURA