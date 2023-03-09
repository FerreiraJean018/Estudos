// no Algoritmo de busca binária, continuamos com o metodo de dividir para conquistar, diminuindo o tamanho da array usando recursão de um função;

// dada uma função que recebe uma array, onde começar a busca, onde terminar a busca, e o valor do preço do livro procurado;

// iniciamos uma variavel que vai guardar o indice do meio da lista, de forma parecida com um pivo, porém não irá trocar de lugar dessa vez;

// e guardamos o objeto contido nesse indice da lista na variavel atual;

// em seguida comparamos o preço do objeto atual com o valor do livro procurado, se o valor for igual, a função retorna a posição do objeto atual;

// se o preço procurado for menor que o valor do objeto atual, a função é chamada novamente, com parametros atualizados, pegando tudo na lista que vem a esquerda do objeto atual

// se o preço procurado for maior que o preço do objeto atual, a função é chamada denovo, com parametros atualizados, pegando tudo na lisya que vem a direita do objeto atual

// e a função mantém essa recursão até que o valor do livro procurado seja igual ao valor do livro atual;

const listaLivros = require('./arrayOrdenado');

function busca(array, de, ate, valorBuscado){
    console.log(array.length)
    let meio = Math.floor((de + ate)/2);
    let atual = array[meio];

    //A medida que os parametros da recursão vão sendo atualizados, corre o risco de passar um indice de inicio que seja maior que o indice de parada
    //se em algum momento, a posição inicial da busca (atualizada em meio + 1) for maior ou igual que a posição final
    //Da lista que vale array.length - 1, então a função entra no equivalente do looping infinito, só que em função recursiva
    //Por isso, criamos uma condição em que, caso o indice de inicio da busca seja maior que o indice de parada, a função retorna -
    //Indicando que houve um erro, sem que o código deixe de rodar.

    if(de > ate){
        return -1
    }

    if(meio === 0){
        return -1
    }

    if(valorBuscado === atual.preco){
        return meio;
    }else if (valorBuscado < atual.preco){
        return busca(array, de, meio - 1, valorBuscado);
    }else{
        return busca(array, meio + 1, ate, valorBuscado);
    }
}

console.log(busca(listaLivros, 0, listaLivros.length - 1, 1))