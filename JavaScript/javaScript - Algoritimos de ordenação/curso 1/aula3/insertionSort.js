const livros = require('../aula1/listaLivros');
const troca = require('../aula3/troca');

function insertionSort(lista){
    for(atual = 0; atual < lista.length; atual++){
        let analise = atual;
        while (analise > 0 && lista[analise].preco < lista[analise - 1].preco){
            troca(lista, analise)
            analise--; //atualizando a variavel
        }
    }
    console.log(lista)
}

console.log(livros)
insertionSort(livros);