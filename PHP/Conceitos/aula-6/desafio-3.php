<?php 
//IMC
$altura = 1.68;
$peso = 135;

$imc = $peso/($altura**2);

if($imc < 18.5){
    echo "Abaixo do peso normal";
}else if($imc >= 18.5 && $imc <= 24.9){
    echo "Peso normal";
}else if($imc >= 25 && $imc <= 29.9){
    echo "Excesso de peso";
}else if($imc >= 30 && $imc <= 34.9){
    echo "Obesidade tipo l";
}else if($imc >= 35 && $imc <= 39.9){
    echo "Obesidade tipo ll";
}else{
    echo "Obesidade tipo lll";
}

?>