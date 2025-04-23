/*### **Questão 7 – Sistema de Notas e Classificação Final**

Crie um programa que receba:

- **nome do aluno**
- três **notas (números de 0 a 10)**
- a **frequência** em porcentagem (de 0 a 100)

E com base nesses dados, faça:

1. Calcule a **média** das três notas.
2. Se a **frequência for menor que 75%**, o aluno estará **reprovado por falta**, independentemente da média.
3. Se a frequência for suficiente, aplique as seguintes regras:
    - Média >= 7: **Aprovado**
    - Média >= 5 e < 7: **Recuperação**
    - Média < 5: **Reprovado por nota**/

//Módulo para leitura dos dados.
import promptSync from 'prompt-sync';

const prompt = promptSync();

//Interface para os dados do aluno.
interface Aluno {
    nome: string,
    notas: number[],
    frequencia: number
};

//Função para ler e validar as notas
function lerNotas(indiceNota: number): number {
    let nota: number;
    do {
        nota = parseFloat(prompt(`Digite a nota ${indiceNota} (0 a 10): `));
    } while (isNaN(nota) || nota < 0 || nota > 10);
    return nota;
}

//Função para ler e validar a frequência
function lerFrequencia(): number {
    let frequencia: number;
    do{
        frequencia = parseFloat(prompt('Digite a frequencia(0 a 100): '));
    } while (isNaN(frequencia) || frequencia < 0 || frequencia > 100);
    return frequencia;
}

//Leitura dos dados.
let nomeAluno: string = prompt('Digite o nome do aluno: ');

let nota1 = lerNotas(1);
let nota2 = lerNotas(2);
let nota3 = lerNotas(3);

let frequenciaAluno = lerFrequencia();

//Calculo da média
function calcularMedia(aluno: Aluno): number {
    let total = 0;
    aluno.notas.forEach(nota => {
        total += nota;
    });
    return total / aluno.notas.length;
}

//Consultar status de aprovação
function verificarAprovação(aluno: Aluno): string {
    const media = calcularMedia(aluno);
    if (aluno.frequencia < 75) {
        return 'Reprovado por falta';
    } else if (media >= 7) {
        return 'Aprovado';
    } else if (media >= 5 && media < 7) {
        return 'Recuperação';
    } else {
        return 'Reprovado por nota';
    }
}

//Criação do objeto aluno
const aluno: Aluno = { nome: nomeAluno, notas: [nota1, nota2, nota3], frequencia: frequenciaAluno };

console.log(`A média de ${aluno.nome} é igual a ${calcularMedia(aluno).toFixed(2)}`);
console.log(`Status: ${verificarAprovação(aluno)}`);


