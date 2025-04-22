/*Crie um array chamado notas com 4 números e imprima a média deles.*/

const notas: number[] = [5, 6, 8, 10];

let soma = 0;

for (const nota of notas) {
    soma += nota;
}

let media = soma/notas.length;

console.log(`A média das notas é ${media.toFixed(2)}`);
