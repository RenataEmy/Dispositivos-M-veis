"use strict";
/*Crie uma função chamada ehPar que receba um número e retorne true se ele for par, ou false se for ímpar.*/
function ehPar(numero) {
    if (numero % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
const retorno = ehPar(5);
if (retorno) {
    console.log('É par');
}
else {
    console.log('É ímpar');
}
