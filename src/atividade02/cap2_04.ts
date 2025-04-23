/*### **Questão 4 – Verificador de saldo**

Utilize o operador ternário para verificar uma variável `saldo`. Se for maior ou igual a zero, mostre “Saldo OK”; caso contrário, mostre “Saldo negativo”.*/

const saldo: number = 380.00;

const verificarSaldo: string = saldo >= 0 ? 'Saldo OK' : 'Saldo negativo';

console.log(verificarSaldo);