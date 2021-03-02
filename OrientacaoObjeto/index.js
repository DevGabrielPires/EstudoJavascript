class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`você sacou ${valor}, seu saldo atual é ${this.saldo}`)
        }else{
            console.log(`desculpe, mas você tentou sacar ${valor}, porem seu saldo é: ${this.saldo}. portanto não podemos realizar essa operação.`)
        }
    }
    
    depositar(valor){
        if (valor > 0) {
            this.saldo += valor;
            console.log(`você depositou ${valor}, seu saldo atual é ${this.saldo}`)
        }
    }
}

const cliente1 = new Cliente();

cliente1.nome = "gabriel";
cliente1.cpf = 5558880896;

const cliente2 = new Cliente();

cliente2.nome = "Ana";
cliente2.cpf = 54458745698;

const contaCorrenteGabriel = new ContaCorrente();

contaCorrenteGabriel.saldo = 0;
contaCorrenteGabriel.agencia = 1111;

contaCorrenteGabriel.depositar(1000);

contaCorrenteGabriel.sacar(400);
contaCorrenteGabriel.depositar(400);



// console.log(cliente1);
// console.log(cliente2);
