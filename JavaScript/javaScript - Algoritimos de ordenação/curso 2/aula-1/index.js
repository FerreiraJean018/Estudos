const {edFolha, edGalho} = require('../aula-1/arrays');

//Função recebe duas listas;


function junta_listas(lista1, lista2){
    
    //declarada as variaveis que guardam os indices das listas 1 e 2, para determinar em qual produto da lista estamos;
    let indice_atual_lista1 = 0;
    let indice_atual_lista2 = 0;



    //declarado a lista final a ser retornada, com os produtos das duas listas ordenados por preço;
    let lista_final = [];
    

    //declarado o indice da lista final onde sera alocado o produto com o menor valor;
    let indice_atual_lista_final = 0;

    while(indice_atual_lista1 < lista1.length && indice_atual_lista2 < lista2.length){
        //enquanto ou a lista um ainda tenha livros ou a lista dois ainda tenha livros

        let produto_atual_lista1 = lista1[indice_atual_lista1];
        let produto_atual_lista2 = lista2[indice_atual_lista2];

        // guarda o produto a ser analisado no momento em uma nova variavel;        
        if (produto_atual_lista1.preco < produto_atual_lista2.preco) {

            //compara o valor dos dois produtos e aloca o mais barato na lista final
            lista_final[indice_atual_lista_final] = produto_atual_lista1;
            indice_atual_lista1++

        } else {
            lista_final[indice_atual_lista_final] = produto_atual_lista2;
            indice_atual_lista2++
        }

        indice_atual_lista_final++;
    }

    //O codigo acima para quando uma das listas acaba, o codigo abaixo verifica se algum lista ainda tem algum produto sobrando e os aloca na lista final

    while(indice_atual_lista1 < lista1.length){
        lista_final[indice_atual_lista_final] = lista1[indice_atual_lista1];
        indice_atual_lista1++
        indice_atual_lista_final++
    }

    while(indice_atual_lista2 < lista1.length){
        lista_final[indice_atual_lista_final] = lista2[produto_atual_lista2];
        indice_atual_lista2++
        indice_atual_lista_final++
    }

    return lista_final;
}

console.log(junta_listas(edFolha, edGalho))