export class ContaCorrente{
    agencia;
    _saldo;

    sacar(valor){
        if (valor <= this._saldo) {
            this._saldo -= valor;
            console.log(`você sacou ${valor}, seu saldo atual é ${this._saldo}`)
            return valor;
        }else{
            console.log(`desculpe, mas você tentou sacar ${valor}, porem seu saldo é: ${this._saldo}. portanto não podemos realizar essa operação.`);
        }
    }
    
    depositar(valor){
        if (valor > 0) {
            this._saldo += valor;
            console.log(`você depositou ${valor}, seu saldo atual é ${this._saldo}`)
        }
    }
}