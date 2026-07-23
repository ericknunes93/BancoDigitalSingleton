// Padrão Singleton para Banco Digital
class BancoDigital {
  static #instancia = null;

  #saldo = 0;
  #titular = '';

  constructor(titular) {
    if (BancoDigital.#instancia) {
      return BancoDigital.#instancia;
    }
    this.#titular = titular;
    BancoDigital.#instancia = this;
  }

  static obterInstancia(titular = 'Padrão') {
    if (!BancoDigital.#instancia) {
      BancoDigital.#instancia = new BancoDigital(titular);
    }
    return BancoDigital.#instancia;
  }

  depositar(valor) {
    if (valor > 0) {
      this.#saldo += valor;
      console.log(`✓ Depósito de R$ ${valor.toFixed(2)} realizado`);
      return true;
    }
    console.log('✗ Valor inválido');
    return false;
  }

  sacar(valor) {
    if (valor > 0 && valor <= this.#saldo) {
      this.#saldo -= valor;
      console.log(`✓ Saque de R$ ${valor.toFixed(2)} realizado`);
      return true;
    }
    console.log('✗ Saldo insuficiente ou valor inválido');
    return false;
  }

  obterSaldo() {
    return this.#saldo;
  }

  obterTitular() {
    return this.#titular;
  }

  exibirExtrato() {
    console.log(`\n--- Extrato ---`);
    console.log(`Titular: ${this.#titular}`);
    console.log(`Saldo: R$ ${this.#saldo.toFixed(2)}\n`);
  }
}

module.exports = BancoDigital;
