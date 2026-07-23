const BancoDigital = require('./BancoDigital');

console.log('=== Demonstração do Padrão Singleton ===\n');

// Primeira instância
const banco1 = new BancoDigital('João Silva');
console.log(`Banco 1 criado: ${banco1.obterTitular()}`);

banco1.depositar(1000);
banco1.exibirExtrato();

// Tentativa de criar segunda instância (retorna a mesma)
const banco2 = new BancoDigital('Maria Santos');
console.log(`Banco 2 "criado": ${banco2.obterTitular()}`);
console.log(`Mesmo banco? ${banco1 === banco2}`);

// Usando método estático
const banco3 = BancoDigital.obterInstancia();
console.log(`\nBanco 3 obtido via método estático: ${banco3.obterTitular()}`);

// Todas as operações afetam a mesma instância
banco2.depositar(500);
banco3.sacar(200);
banco1.exibirExtrato();

console.log('=== Fim da demonstração ===');
