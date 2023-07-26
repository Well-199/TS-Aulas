// Os types primitivos
var _a;
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
// Usando types no retorno de uma função
function firstLetterUpperCase2(name) {
    var firstLetter = name.charAt(0).toLocaleUpperCase();
    var nameWithFirstLetterUpperCase = "".concat(firstLetter).concat(name.substring(1));
    return nameWithFirstLetterUpperCase;
}
var username = firstLetterUpperCase2('Wellington');
function somar(n1, n2) {
    return n1 + n2;
}
var resultado = somar(30, 45);
// Contextual Typing em funções anônimas
var list_names = ['bonieky', 'andre', 'cristina', 'marilia', 30];
list_names.forEach(function (nome) {
    /*
        mesmo não definindo tipo no array acima o typescript avisa
        que se trata de um array de strings e que o metodo toUpperCase()
        é um metodo de string que não pode ser usado em um calor tipo inteiro

        -> Property 'toUpperCase' does not exist on type 'string | number'.
        -> Property 'toUpperCase' does not exist on type 'number
    */
    // console.log(nome.toUpperCase())
});
var resumo = function (usuario) {
    return "Ol\u00E1 ".concat(usuario.nome, ", tudo bem? Vo\u00E7e tem ").concat(usuario.idade, " anos");
};
resumo({ nome: "Bonieky", idade: 40 });
// Union Types (múltiplos types)
var user_age = 35;
user_age = (_a = document.getElementById('resultado')) === null || _a === void 0 ? void 0 : _a.innerHTML;
function mostrarIdade(idade) {
    if (typeof idade === 'string') {
        console.log(idade.toUpperCase());
    }
    else {
        console.log(idade);
    }
}
mostrarIdade(40);
mostrarIdade("40");
var nomeCompleto = 'Bonieky Lacerda';
var saudacao = function (usuario) {
    return "Ol\u00E1 ".concat(usuario.nome, ", vo\u00E7e tem ").concat(usuario.idade, " anos");
};
saudacao({
    nome: 'Well',
    idade: 40
});
// Type Assertions
