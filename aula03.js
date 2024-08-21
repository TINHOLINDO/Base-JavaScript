// Alguns erros comuns

// const numero; Primeiro erro: Não declarar uma constante


const minhaVar = "oi" // 2º Erro: Não declarar uma variável e declarar no código;
console.log(minhaVar); // exemplo, chamar minhavar com V minúsculo

console.error("Isso está errado") // 3º "Erro": Você pode declarar um erro com o console.erro;

// Condicional abreviada if(){}

let idadeMinima = 18;
let idadeCliente = 17;

if(idadeCliente >= idadeMinima){
    console.log("Whisky")
} else {
    console.log("Nescau")
}


//Valor ternário
console.log(idadeCliente >= idadeMinima ? "whisky" : "água")
// modo ternário, utilizando a estrutura _____ >= _____ ? _____ : _____
// modo ternário, utilizando a estrutura _____ <= _____ ? _____ : _____
// modo ternário, utilizando a estrutura _____ == _____ ? _____ : _____

//Template string

const nome = "Victor";
const idade = 17;
const cidadeNatal = "Foz do Iguaçu"

const apresentacao = "Meu nome é " + nome + ", minha idade é " + idade + " e nasci em " + cidadeNatal
console.log(apresentacao)

//Template string
const apresentacao2 = `Meu nome é ${nome}, minha idade é ${idade} e minha cidade natal é ${cidadeNatal}`
console.log(apresentacao2)