"use strict";
/*Crie um enum chamado DiaSemana com os dias: SEGUNDA, TERÇA, QUARTA, QUINTA, SEXTA. Crie uma variável que recebe DiaSemana.QUARTA e imprima no console.*/
var DiaSemana;
(function (DiaSemana) {
    DiaSemana["SEGUNDA"] = "Segunda";
    DiaSemana["TER\u00C7A"] = "Ter\u00E7a";
    DiaSemana["QUARTA"] = "Quarta";
    DiaSemana["QUINTA"] = "Quinta";
    DiaSemana["SEXTA"] = "Sexta";
})(DiaSemana || (DiaSemana = {}));
;
let dia = DiaSemana.QUARTA;
console.log(dia);
