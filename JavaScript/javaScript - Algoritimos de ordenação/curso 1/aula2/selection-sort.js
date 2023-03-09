const livros = require('../aula1/listaLivros');
const menorValor = require('../aula1/precos');

for (atual = 0; atual < livros.length; atual++){
    let menor = menorValor(livros, atual);

    let livro_atual = livros[atual];
    console.log(`livros atual`, livros[atual]);
    let livro_menor_preco = livros[menor];
    console.log(`livro menor preço`, livros[menor]);

    livros[atual] = livro_menor_preco;
    livros[menor] = livro_atual;

    
}

console.log(livros)


//O loop for vai servir para ordenar toda a lista de livros pelo preço, e depois atribuir cada um dos valores ja ordenados em uma nova array

//Usamos a função de menor valor para determinar o menor valor de um lista, e depois pegamos esse valor e empurramos para outra lista
