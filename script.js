//1 Crie um objeto que receba ao menos três propriedades sobre você.

//2 Adicione uma nova propriedade sem alterar seu objeto inicial.

//3 Remova uma propriedade desse objeto.

//4 Mostre no console todas as propriedades desse objeto.

//5 Crie um array  chamado "cadastro" contendo ao menos 5 objetos.

//6 Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.

//7 Na propriedade amigos, adicione ao menos 4 itens.

//8 Mostre no console o nome de um amigo de cada lista.

//1
let eu = {
    nome: "Luan",
    sobrenome: "Vitor",
    idade: 22,
    gosta: "cozinhar"
}

//2
eu.malha = true;


//3
delete eu.sobrenome;


//4
console.table(eu);

//5
const cadastro = [
    {
        nome: "Pedro",
        idade: "23",
        telefone: true,
        amigos: ["Ensino médio", "8 anos", "Mesma cidade", "Homem"]
    },

    {
        nome: "Giovana",
        idade: 24,
        telefone: true,
        amigos: ["Amigos em comum", "2 anos", "Cidades diferentes", "Namorada"]
    },
    {
        nome: "Willian",
        idade: 23,
        telefone: true,
        amigos: ["Mesmo colégio", "8 anos", "Mesma cidade", "Homem"]
    },
    {
        nome: "Emanuel",
        idade: 22,
        telefone: true,
        amigos: ["Colégios diferentes", "4 anos", "Mesma cidade", "Lindo"]
    },
    {
        nome: "Ariel",
        idade: 23,
        telefone: true,
        amigos: ["Colégios diferentes", "4 anos", "Mesma cidade", "Inspiração"]
    },
]

console.log(cadastro[0].amigos[2]);
console.log(cadastro[1].amigos[3]);
console.log(cadastro[2].amigos[1]);
console.log(cadastro[3].amigos[0]);
console.log(cadastro[4].amgios[1]);


