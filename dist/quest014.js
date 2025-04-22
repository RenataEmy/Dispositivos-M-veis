"use strict";
/*Crie uma função descreverPessoa que receba um objeto com nome, idade e profissao, e retorne uma frase descritiva.*/
;
function descreverPessoa(pessoa) {
    console.log(`Me chamo ${pessoa.nome}, tenho ${pessoa.idade} anos. E trabalho como ${pessoa.profissao}.`);
}
const pessoa = { nome: 'Carlos', idade: 27, profissao: 'Atendente' };
descreverPessoa(pessoa);
