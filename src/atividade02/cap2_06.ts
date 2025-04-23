/*Questão 6 – Nota do aluno*

Com base em uma variável `nota` de 0 a 10, exiba:

- nota >= 7 → “Aprovado”
- nota entre 5 e 6.9 → “Recuperação”
- nota < 5 → “Reprovado”*/

let nota: number = 4.3;

function verificarStatus(nota: number): void{
    if(nota >= 7){
        console.log('Aprovado');
    }else if (nota >= 5 && nota < 6.9){
        console.log('Recuperação');
    }else{
        console.log('Reprovado');
    }
}

verificarStatus(nota);