// bloco de código que desempenha um papel especifico que só será executado quando for chamado
/*
EXEMPLO 1
function mensagem {
alert (“Seja muito bem-vindo(a)!”)
console. Log(“Mais uma vez, seja bem-vindo(a)”)
}
mensagem ()
*/

/*
EXEMPLO 2
function somar (valor1, valor2) {
alert(valor1 + valor2)
}
somar (30, 40)
*/

/*
EXEMPLO 3 
function mensagemPessoal (nome, cargo, anosTrabalhados) ‹ alert(‘Seja bem-vindo(a) ${cargo} $ {nome}. Estamos felizes por ter você trabalhando conosco há ${anosTrabalhados} anos. *)
mensagemPessoal (“Lucas”, “Gerente”, 10) mensagemPessoal (“Irineu”, “Você não sabe, nem eu”, 50)
*/

/*

EXEMPLO 4
fuction somarDevolver(numero1, numero2, numero3) {
            let resultado = numero1 + numero2 + numero3
            return resultado
}

// guardar numa variável ou guardar em qualquer lugar no código 
let soma1 = somarEDevolver(10, 11, 12)
let soma2 = somarEDevolver(30, 40, 50)

alert(soma1)
alert(soma2)
*/

/*
EXEMPLO 5
fuction parOuImpar(numero) {
            if (numero % 2 === 0) {
                     return "PAR"
             }

            return "IMPAR"
}

let resultado1 = parOuImpar(10)
let resultado2 = parOuImpar(15)

alert(` O número 10 é ${resultado1}`)
alert(` O número 15 é ${resultado2}`)
*/

/*
EXEMPLO 6- 
document.querySelector("button").addEventListener("click", function() {
            alert("Clicou no botão")
})
*/


/*
EXEMPLO 7
document.querySelector("button").addEventListener("click", () => {
            alert("Clicou no botão")
})
*/

/*
EXEMPLO 8
let somar = (valor1, valor2) => valor1 + valor2
let resultadoSoma = somar(20, 30)
alert(resultadoSoma)
/*


