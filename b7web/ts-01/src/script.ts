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