<?php
    echo "Você só pode entrar se tiver mais que 18 anos de idade" . PHP_EOL;

    $idade_permitida = 18;
    $idade = 25;

    if ($idade > $idade_permitida){
        echo "Você tem mais de $idade_permitida, pode entrar";
    } else {
        echo "Você tem menos de $idade_permitida, não pode entrar";
    }
?>