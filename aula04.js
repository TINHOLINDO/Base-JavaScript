// FUNÇÕES!!!!

let x = "nada";
console.log(x)
x = "Oi"
y= "Tchau"

// Declaraçõa de função

imprimeTexto(y)

// 1) Declara a função 

function imprimeTexto(texto) {
    console.log(texto)
}

// 2) Chamarr/executar a função

imprimeTexto(x)
imprimeTexto("Eu sou aluno")

function soma(){
    return 2 + 2
}

console.log(soma())
imprimeTexto(soma())
imprimeTexto(somaDeNumeros(12, 14))
imprimeTexto(somaDeNumeros(4, 7))

function somaDeNumeros(numero1, numero2){
    return numero1 + numero2
}

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`
}

imprimeTexto(nomeIdade("Tinho", 17))
imprimeTexto(nomeIdade(17, "Victor"))

imprimeTexto(multiplicacao())
// Você pode definir um parâmetro inicial para a soma de sua função
function multiplicacao(numero4 = 2, numero5 = 5){
    return numero4 * numero5
}

imprimeTexto(multiplicacao(somaDeNumeros(3,4), somaDeNumeros(5,10)));