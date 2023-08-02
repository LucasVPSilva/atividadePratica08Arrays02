// Exercicio 1:

/*
const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 25, 42, 68, 85, 100];

document.write(`Números pares: `);
for (let i = 0; i < vetor.length; i++) {

    if (vetor[i] % 2 === 0) {
        document.write(`${vetor[i]} `);
    }

}

*/

// Exercicio 2:

/*

const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let soma = 0;

document.write(`Resultado da soma: `);

for (let i = 0; i < vetor.length; i++) {
    soma += vetor[i];

}

document.write(`${soma} `);

*/

// Exercicio 3

/*

let inicializador = 2;
const numerosPerfeitos = [];


while (numerosPerfeitos.length < 4) { //pára quando encontra os 4 primeiros
    let soma = 0;

    for (let i = 1; i < inicializador; i++) { //verifica quais números menor que o inicializador tem o resto zero
        if (inicializador % i === 0) {
            soma += i;

        }
    }

    if (soma === inicializador) {
        numerosPerfeitos.push(inicializador);
    }

    inicializador++
}

console.log(numerosPerfeitos);

*/

// Exercicio 4

/*

const vetor1 = [1, 2, 3];
const vetor2 = [11, 12, 13];

const novoVetor = [];

function somaVetores(v1, v2) {
    return novoVetor.push(v1 + "," + v2);
}

somaVetores(vetor1, vetor2);

console.log(novoVetor);

for (const iterator of novoVetor) {
    console.log(iterator);
}

*/

// Exercicio 5:

/*

const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const numero = 184;

function verificaVetor(v1, number) {
    return console.log(v1.includes(number));
}

verificaVetor(vetor, numero);

*/

// Exercicio 6:



const listaNomes = [];
let infNomes;

do {
    infNomes = prompt('Informe o nome:');
    if (infNomes == null) {
        alert(`Você digitou algo errado, tenta novamente!`)
    } else {
        listaNomes.push(infNomes);
    }



} while (confirm('Deseja Continuar?'))

console.log(listaNomes)

document.write('Entrada: ')
for (const nome of listaNomes) {
    document.write(`${nome}, `)
}

document.write('<p>Saída: ')

for (const nome of listaNomes.reverse()) {
    document.write(`${nome}, `)
}
