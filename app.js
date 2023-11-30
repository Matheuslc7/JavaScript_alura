alert ('Bem vindo ao jogo do número secreto');
let numeroSecreto = 7
console.log (numeroSecreto)
let chute = prompt('Escolha um número de 1 a 10');

if (chute == numeroSecreto) {
    console.log ('Você acertou o número secreto, parabéns !');
}
else {
    alert('Você errou, tente novamente !')
}