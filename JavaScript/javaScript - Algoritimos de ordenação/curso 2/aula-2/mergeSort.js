const listaLivros = require('./array');

function mergeSort(array, nivel = 0){
    console.log(array);
    console.log(nivel)

    if(array.length > 1){
        let metade = Math.floor(array.length / 2);
        let primeiraParte = mergeSort(array.slice(0, metade), nivel++);
        let segundaParte = mergeSort(array.slice(metade, array.length), nivel++);
        array = ordena(primeiraParte, segundaParte);
    }
    return array; 
}

function ordena(primeiraParte, segundaParte){
    let posicaoAtual1 = 0;
    let posicaoAtual2 = 0;
    let resultado = [];

    while( posicaoAtual1 < primeiraParte.length  && posicaoAtual2 < segundaParte.length ){
        let produtoAtual1 = primeiraParte[posicaoAtual1];
        let produtoAtual2 = segundaParte[posicaoAtual2];

        if(produtoAtual1.preco < produtoAtual2.preco){
            resultado.push(produtoAtual1);
            posicaoAtual1++;
        }else{
            resultado.push(produtoAtual2);
            posicaoAtual2++;
        }
    }

    return resultado.concat(posicaoAtual1 < primeiraParte.legth
        ? primeiraParte.slice(posicaoAtual1)
        : segundaParte.slice(posicaoAtual2));
}

console.log((mergeSort(listaLivros)))