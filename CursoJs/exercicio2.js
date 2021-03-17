const nome = "Gabriel";
const sobreNome = "Pires";
const idade = 24;
const peso = 80;
const altura = 1.80;

const imc = peso * (altura * altura);
const anoNascimento = 2021 - idade;

console.log(`${nome} ${sobreNome} tem ${idade} anos, pesa ${peso} KG`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc.toFixed(2)}`);
console.log(`${nome} nasceu no ano de ${anoNascimento}`);