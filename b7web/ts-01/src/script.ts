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

let list_names = ['bonieky', 'andre', 'cristina', 'marilia', 30]

list_names.forEach(( nome ) => {
    /*
        mesmo não definindo tipo no array acima o typescript avisa 
        que se trata de um array de strings e que o metodo toUpperCase() 
        é um metodo de string que não pode ser usado em um calor tipo inteiro

        -> Property 'toUpperCase' does not exist on type 'string | number'.
        -> Property 'toUpperCase' does not exist on type 'number
    */ 
    // console.log(nome.toUpperCase())
})

// Types em Objetos and Propriedades Opcionais

type UserResumo = {
    nome: string
    idade?: number // idade é opcional
}

const resumo = (usuario: UserResumo) => {
    return `Olá ${usuario.nome}, tudo bem? Voçe tem ${usuario.idade} anos`
}

resumo({nome: "Bonieky", idade: 40})

// Union Types (múltiplos types)

let user_age: string | number | undefined = 35

user_age = document.getElementById('resultado')?.innerHTML

function mostrarIdade(idade: string | number) {
    if(typeof idade==='string'){
        console.log(idade.toUpperCase())
    } else {
        console.log(idade)
    }
}

mostrarIdade(40)
mostrarIdade("40")

// Type e Interface: Como usar e diferenças

type NomeCompleto = string | undefined

let nomeCompleto: NomeCompleto = 'Bonieky Lacerda'

// Casos de uso
type Greeting = {
    nome: string
    idade: number
}

interface GreetingUser {
    nome: string
}

interface GreetingUser {
    idade: number
}

const saudacao = (usuario: GreetingUser) => {
    return `Olá ${usuario.nome}, voçe tem ${usuario.idade} anos`
}

saudacao({
    nome: 'Well',
    idade: 40
})

// Type Assertions
