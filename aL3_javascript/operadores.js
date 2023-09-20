// javascript
//operadores unários : atribuição = , negação = !
//console.log(!true);

//operadores aritméticos: + - * / %
/*
var resultado = 50  / 10 * 5;

var media = (10 + 7 + 6)/3;

console.log(media); 

var num = 619;

var unidade = num % 10;

var dezena = (num % 100 - unidade) / 10;

var centena = Math.trunc(num / 100);

console.log('dezena: ' +dezena);
console.log('unidade: ' +unidade);
console.log('centena: ' +centena); 

*/

// operadores relacionais: > >= < <= == ===
//console.log(100 === '100');

// operadores lógicos: && & || | 
//console.log(true && true && false); 

//console.log(false || false || true);

// operador ternário :
var idade = 18;
var aprovação = true, condição = idade >= 18 && aprovação === true;
var poderDirigir = condição? 'pode ir de arrasta pra cima' : 'pode ir de arrasta pra baixo';

console.log(poderDirigir);