"use strict";
/*### **Questão 4 – Verificador de saldo**

Utilize o operador ternário para verificar uma variável `saldo`. Se for maior ou igual a zero, mostre “Saldo OK”; caso contrário, mostre “Saldo negativo”.*/
const saldo = 380.00;
const verificarSaldo = saldo >= 0 ? 'Saldo OK' : 'Saldo negativo';
console.log(verificarSaldo);
