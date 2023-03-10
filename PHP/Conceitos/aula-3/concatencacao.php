<?php
    //Para concaternarmos uma string com uma variavel ou duas strings em php usamos a seguinte sintaxe

    //"texto" . $variavel . "texto";

    $nome = "Jean";
    $idade = 24;

    $texto = "Olá, meu nome é " . $nome . " e eu tenho " . $idade . " anos de idade";

    //echo $texto;

    //Podemos também usar aspas duplas para determinar uma string, e o php entenderá que qualquer $ representas uma variavel dentro dessa string

    $texto = "Olá, meu nome é $nome e eu tenho $idade anos de idade";
    //echo $texto

    //quando você quiser imprimir mais de uma coisa com o echo, uma em baixo da outra, você deve terminar a string de cima com \n que representa new line

    $texto = "olá, meu nome é $nome\n" . "eu tenho $idade anos de idade";
    echo $texto
?>