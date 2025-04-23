/***Questão 2 – Número par ou ímpar**

Peça para o aluno criar um programa que verifique se um número é **par ou ímpar**, utilizando o **operador ternário**.*/

let numero: number = 7;

const classificacao: string = numero % 2 === 0 ? 'par' : 'impar';

console.log(`O número é ${classificacao}`);