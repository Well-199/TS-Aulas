// Os types primitivos
var nome = 'Wellington';
var idade = 20;
var programador = true;
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof programador);
// Type em Arrays
var nomes = ['bonieky', 'pedro', 'luiz', 'fulano'];
var idades = [90, 15, 20, 30];
var numeros = [15, 23, 90, 11];
numeros.push(15);
// O type any (e quando usá-lo)
var users = ['bonieky', 'pedro', 'luiz', 'fulano'];
users.push(40);
users.push(true);
// Usando types nos parâmetros de uma função
function firstLetterUpperCase(name) {
    var firstLetter = name.charAt(0).toLocaleUpperCase();
    var nameWithFirstLetterUpperCase = "".concat(firstLetter).concat(name.substring(1));
    return nameWithFirstLetterUpperCase;
}
console.log(firstLetterUpperCase('wellington'));
