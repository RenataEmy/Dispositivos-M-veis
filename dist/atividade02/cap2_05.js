"use strict";
/*### **Questão 5 – Votação obrigatória**

Crie um programa que recebe a idade de uma pessoa e determina a obrigatoriedade do voto conforme as regras brasileiras:

- Menor de 16 → “Não vota”
- 16 ou 17, ou maior de 70 → “Voto facultativo”
- De 18 a 70 → “Voto obrigatório”*/
let idadePessoa = 71;
function verificarIdade(idade) {
    if (idadePessoa < 16) {
        console.log('Não vota');
    }
    else if (idadePessoa >= 16 && idadePessoa <= 17 || idade > 70) {
        console.log('Voto facultativo');
    }
    else {
        console.log('Voto obrigatório');
    }
}
verificarIdade(idadePessoa);
