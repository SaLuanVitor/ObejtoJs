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
        amigos: ["Luan", "Edson", "Deyvid", "Diego"]
    },

    {
        nome: "Giovana",
        idade: 24,
        telefone: true,
        amigos: ["Willian", "Emanuel", "Gabriele", "Vinicius"]
    },
    {
        nome: "Willian",
        idade: 23,
        telefone: true,
        amigos: ["Izabel", "Amanda", "Luara", "Matheus"]
    },
    {
        nome: "Emanuel",
        idade: 22,
        telefone: true,
        amigos: ["José", "Clara", "Thiago", "Erick"]
    },
    {
        nome: "Ariel",
        idade: 23,
        telefone: true,
        amigos: ["Fernanda", "Marcos", "Luana", "Carla"]
    },
]


for (let i = 0; i < cadastro.length; i++) {
    let amigoR = Math.floor(Math.random() * 4)
    console.log(`${cadastro[i].nome} possui um amig que se chama ${cadastro[i].amigos[amigoR]}`);
}


