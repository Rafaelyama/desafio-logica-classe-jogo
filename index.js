// Entrada de dados.
let vitorias = parseInt(19);
let derrotas = parseInt(5);

// Função para calcular o saldo de vitórias.
function calcularQuantidadeVitorias(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    return saldoVitorias;
}
// Determina o nivel do jogador como vazio.
let nivel = "";

// Calcula o saldo de vitórias.
let saldoVitorias = calcularQuantidadeVitorias(vitorias, derrotas);

// Calcula o nível do jogador.
nivel = calcularNivelRanked(saldoVitorias);

// Função para determinar o nível do jogador.
function calcularNivelRanked(saldoVitorias) {    
    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias < 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias < 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias < 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias < 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias < 100) {
        nivel = "Lendário";
    } else {
        nivel ="Imortal";
    }
    return nivel;
}

// Exibe a mensagem final.
console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);




