<?php
    // Os tipos de variaveis do php funcionam como outras linguagens

    // numeros = (inteiros e floats[ou double, são sinonimos]), strings, booleanos

    $idade = 24;
    $mes = 0.6;

    $idade_total = $idade + $mes;

    echo gettype($idade_total);

    $texto = "This body, this body holding me, be my reminder here that i'm not alone";

    echo $texto;
    echo gettype($texto)
?>