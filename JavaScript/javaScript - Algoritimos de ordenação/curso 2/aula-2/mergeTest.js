/*
A ideia por trás do mergeSort é simples, entretanto a execução é um pouco complexa devido a recusão do código

primeiramente pegamos uma lista de itens, e se a lista tiver mais que dois itens, a separemaos em duas, uma a esquerda e outra a direita

e chamamos a função dentro dela mesma, substituindo o parametro dela para a array da esqueda e a array da direita respectivamente

a função irá se repetir ate que tenham sido formadas n listas com 1 elemento

cada lista forma um par direita e esquerda

em seguida criamos uma outra função que ordena, uma função ordena()

e essa função devolve o valor ordenado que é usado novamente na função mergeSort, fazendo a mergeSort regredir, até voltar a ser uma lista de n elementos

agora ordenados.
*/ 

const listaLivros = require('./array');

function mergeSort(array, nivel=0){
    console.log(array);
    console.log(nivel)

    if(array.length> 1){ //checa se a lista tem mais de um elemento
        let meio = Math.floor(array.length/2) //acha a metade do array
        let esquerda = mergeSort(array.slice(0, meio), nivel++); //atribui a primeira metade do array na variavel esquerda, repetindo ate a array ter 1 elemento
        let direita = mergeSort(array.slice(meio, array.length), nivel++); //atribui a segunda metade do array na variavel direita, repetindo ate a array ter 1 elemento
        array = ordena(esquerda, direita) // chama a funcão ordena para ordenar duas arrays de 1 elemento
    }
    return array;
}

function ordena(esquerda, direita){
    let posicaoAtualEsquerda = 0; // cria um indice de posição para as duas arrays
    let posicaoAtualDireita  = 0;
    let resultado = []; // cria uma lista onde serão colocados os items ordenados
    
    while(posicaoAtualEsquerda < esquerda.length && posicaoAtualDireita < direita.length){ //looping que se mantem enquanto a posição do indice atual das duas listas nao chegou no ultimo elemento da respective lista
        let produtoAtualEsquerda = esquerda[posicaoAtualEsquerda];
        let produtoAtualDireita = direita[posicaoAtualDireita];

        if(produtoAtualEsquerda.preco < produtoAtualDireita.preco){//checa qual dos valores é menor e empurra o menor valor para a lista resultado,
            resultado.push(produtoAtualEsquerda);
            posicaoAtualEsquerda++
        }else{
            resultado.push(produtoAtualDireita);
            posicaoAtualDireita++
        }
    }
    //retorna a lista resultado concatenada com oq sobrou da lista da direita ou da esquerda;
    return resultado.concat(posicaoAtualEsquerda < esquerda.length
        ? esquerda.slice(posicaoAtualEsquerda)
        : direita.slice(posicaoAtualDireita));
}

console.log(mergeSort(listaLivros))
