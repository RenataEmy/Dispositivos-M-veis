/*Crie uma função descreverPessoa que receba um objeto com nome, idade e profissao, e retorne uma frase descritiva.*/

interface Pessoa{
    nome: string,
    idade: number,
    profissao: string
};

function descreverPessoa(pessoa: Pessoa){
    console.log(`Me chamo ${pessoa.nome}, tenho ${pessoa.idade} anos. E trabalho como ${pessoa.profissao}.`);
}

const pessoa: Pessoa = {nome: 'Carlos', idade: 27, profissao: 'Atendente'};

descreverPessoa(pessoa);
