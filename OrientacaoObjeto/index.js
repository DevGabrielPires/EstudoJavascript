import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';


const cliente1 = new Cliente();

cliente1.nome = "Gabriel";
cliente1.cpf = 5558880896;

const cliente2 = new Cliente();

cliente2.nome = "Fran";
cliente2.cpf = 54458745698;

const contaCorrenteGabriel = new ContaCorrente();

contaCorrenteGabriel._saldo = 0;
contaCorrenteGabriel.agencia = 1111;

contaCorrenteGabriel.depositar(1000);
contaCorrenteGabriel.depositar(10);

const valorSacado = contaCorrenteGabriel.sacar(400);


console.log(valorSacado);


// console.log(cliente1);
// console.log(cliente2);
