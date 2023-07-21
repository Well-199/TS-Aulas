// Os types primitivos

let nome: string = 'Wellington'

let idade: number = 20

let programador: boolean = true

console.log(typeof nome)
console.log(typeof idade)
console.log(typeof programador)

// Type em Arrays

let nomes: string[] = ['bonieky', 'pedro', 'luiz', 'fulano']

let idades: number[] = [90, 15, 20, 30]

let numeros: number[] = [15, 23, 90, 11]

numeros.push(15)

// O type any (e quando usá-lo)

let users: any = ['bonieky', 'pedro', 'luiz', 'fulano']

users.push(40)
users.push(true)

// Usando types nos parâmetros de uma função

function firstLetterUpperCase (name: string) {
    let firstLetter = name.charAt(0).toLocaleUpperCase()
    let nameWithFirstLetterUpperCase = `${firstLetter}${name.substring(1)}`
    return nameWithFirstLetterUpperCase
}

console.log(firstLetterUpperCase('wellington'))

// Usando types no retorno de uma função

function firstLetterUpperCase2 (name: string): string {
    let firstLetter = name.charAt(0).toLocaleUpperCase()
    let nameWithFirstLetterUpperCase = `${firstLetter}${name.substring(1)}`
    return nameWithFirstLetterUpperCase
}
const username: string = firstLetterUpperCase2('Wellington')


function somar (n1: number, n2: number): number {
    return n1 + n2
}
const resultado: number = somar(30, 45)

// Contextual Typing em funções anônimas