alert ('Bem vindo ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random () * 100 + 1);
console.log (numeroSecreto);
let chute;
let tentativas = 1;

//enquanto chute for diferente de numeroSecreto
while (chute != numeroSecreto) {

    chute = prompt('Escolha um número de 1 a 100');
    
    if (chute == numeroSecreto) {
        break;
    }
    else {
        alert('Você errou, tente novamente !');
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}`);
        }
        else {
            alert(`O número secreto é menor que ${chute}`);
        }
        tentativas++;
    }
    
}
let pluralTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
    
alert(`Você acertou o número secreto ${numeroSecreto}, com  ${tentativas}  ${pluralTentativas}, parabéns !`);
