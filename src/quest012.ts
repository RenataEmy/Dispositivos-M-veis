/*Crie uma função que receba um parâmetro do tipo string | number. Use typeof para identificar o tipo e imprimir uma mensagem adequada.*/

function idade(idade: string | number){
    console.log('A variavel é um/uma ' + typeof idade);
}

idade('Vinte');