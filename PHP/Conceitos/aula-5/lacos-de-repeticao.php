<?php

//laços de repetição

//while
$contador = 0;

/*while($contador <= 5){
    echo $contador . PHP_EOL;
    $contador++;

}
*/


/*for($indice = 0; $indice <= 10; $indice++){
    echo $indice . PHP_EOL;
}
*/

//Usando break e continue

//Dentro de um Loop, quando usamos continue, ele pula uma determinada parte do loop e segue com a proxima sem realizar nenhuma ação
//Usando o break, caso o loop chegue em um determinado ponto estabelecido ele para o loop

for($i = 0; $i<=10; $i++){
    if($i == 5){
        continue;
        //O loop pula o numero 5
    }else if($i == 9){
        break;
        //O loop encerra chegando em i = 9
    }else{
        echo $i . PHP_EOL;
    }


}

?>