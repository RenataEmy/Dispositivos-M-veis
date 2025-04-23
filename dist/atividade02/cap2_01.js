"use strict";
/**Questão 1 – Verificação de idade**

Crie um programa que receba uma variável `idade` e imprima:

- “Criança” se for menor que 12,
- “Adolescente” se estiver entre 12 e 17,
- “Adulto” se for 18 ou mais.*/
let idade = 10;
function verificarFase(idade) {
    if (idade > 0 && idade < 12) {
        console.log('Criança');
    }
    else if (idade >= 12 && idade < 17) {
        console.log('Adolescente');
    }
    else {
        console.log('Adulto');
    }
}
verificarFase(idade);
