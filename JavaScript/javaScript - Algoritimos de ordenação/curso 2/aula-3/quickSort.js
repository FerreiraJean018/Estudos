/*A função quickSort deve estabalecer um pivo, que será o ponto de referencia para a ordenação da array, no nosso caso usaremos o objeto que fica na metade da array.

A partir do pivo, vamos percorrer a array do primeiro item ao ultimo e do ultimo ao primeiro, comparando cada um dos objetos com o pivo, e mudando-os de lugar e acordo com o preço comparado ao preço do pivo.*/ 

const lista = require('./array');
const trocaLugar = require('./posicionando-pivo')

function quickSort(array, esquerda, direita){
    if(array.length > 1){
        let indiceAtual = particiona(array, esquerda, direita);
        if(esquerda < indiceAtual - 1){
            quickSort(array, esquerda, indiceAtual - 1);
        }
        if (indiceAtual < direita){
            quickSort(array, indiceAtual, direita);
        }
    }
    return array;
}

function particiona(array, esquerda, direita){
    console.log('array', array)
    console.log('esquerda e direita', esquerda, direita)
    let pivo = array[Math.floor((esquerda + direita)/2)];
    let atualEsquerda = esquerda; //Primeira chamada esquerda = 0   
    let atualDireita = direita; // Primeira chamada direita = array.lentgh - 1

    while(atualEsquerda <= atualDireita){
        while(array[atualEsquerda].preco < pivo.preco){
            atualEsquerda++
        }

        while(array[atualDireita].preco > pivo.preco){
            atualDireita--
        }

        if(atualEsquerda <= atualDireita){
            trocaLugar(array, atualEsquerda, atualDireita);
            atualEsquerda++;
            atualDireita--;
        }
    }
    return atualEsquerda; //indice que marca a posição de onde termina a proxima chamada do quickSort;
}

console.log(quickSort(lista, 0, lista.length - 1 ));