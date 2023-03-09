const lista = require('./array')

//Crie uma função que determine o numero de livros com preço menor que o livro passado no parametro;
//Crie uma função que recebe um array, e duas posições dentro desse array, e troque os objetos da lista de posição
//Crie uma função que recebe uma array, encontra o meio desse array, estabelece o array como pivo, pega todos os produtos com valor menor que o pivo e os troca de lugar para o inicio da lista

function encontraMenores(array, pivo){
    let menorValor = 0;
    for(indice = 0; indice < array.length; indice++){       
        let produtoAtual = array[indice];
        if(produtoAtual.preco < pivo.preco){
            menorValor++;
        }
    }
    trocaLugar(array, array.indexOf(pivo), menorValor);

    //usamos a função menor valor para determinar quantos livros tem um valor menor que o livro que usamos como parametro
    //em seguida usamos a função troca lugar para colocar o livro do parametro na posição menorValor
    //assim ele ficara logo a baixo da quantidade de livros que são mais baratos q ele;
}

function trocaLugar(array, de, para){
    let elemento1 = array[de];
    let elemento2 = array[para];

    array[para] = elemento1;
    array[de] = elemento2;

    // a função troca lugar é muito simples;
    // dada uma array, uma objeto em uma posição e um objeto em outra posição
    // os objetos são trocados de lugar
}



function dividePivo(array){
    let pivo =  array[Math.floor(array.length/2)];
    encontraMenores(array, pivo);
    let valoresMenores = 0;
    
    for(i = 0; i < array.length; i++){
        let produtoAtual = array[i]
        if(produtoAtual.preco <= pivo.preco && produtoAtual !== pivo){
            trocaLugar(array, i, valoresMenores);
            valoresMenores++;
        }
    }
    return array;

    // na função dividePivo, usamos como pivo da lista o elemento que fica na metade da lista
    // em seguida esse elemento sai da metade da lista para a posição logo a baixo ao numero total de livros mais baratos q ele
    // no caso dessa lista é o rust, e há dois livros mais baratos que ele, entao o rust sai do meio da lista para a posição 2;
    // em seguida percorre-se a lista em busca dos dois livros mais baratos que o rust, e quando achados suas posições são substituidas para o inicio do array;
}


module.exports = trocaLugar;
