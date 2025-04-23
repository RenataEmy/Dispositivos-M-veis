/*### **Questão 3 – Escolha de linguagem**

Usando `switch`, crie um programa que dado o número de uma linguagem imprima:

- 1 → "TypeScript"
- 2 → "JavaScript"
- 3 → "Python"
- qualquer outro valor → "Linguagem não cadastrada"*/

let tipoLinguagem: number = 1;

switch (tipoLinguagem) {
    case 1:
        console.log('TypeScript');
        break;
    case 2:
        console.log('JavaScript');
    case 3: 
        console.log('Python');
    default:
        console.log('Linguagem não cadastrada');
        break;
}