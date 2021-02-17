console.log(`trabalhando com variáveis`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio De Janeiro`;

// console.log(salvador, saoPaulo, rioDeJaneiro);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`,
);

listaDeDestinos.push(`Curitiba`); // este comando adiciona dinâmicamente um item a lista (no array)

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); //deleta um item da lista com parametros
//listaDeDestinos.pop(); //deleta o ultimo elemento do array

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

console.log(listaDeDestinos[1]);