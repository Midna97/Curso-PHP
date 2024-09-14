<?php
//PARA PREPARAR CARLOTA
// Ingredientes y cantidades (usando arrays)
$ingredientes = ["leche condensada", "leche evaporada"];
$ingredientessolidos= ["limones", "galletas marías"];
$cantidades = [1, 1]; // NULL significa que no tenemos ese ingrediente
$cantidadessolidos = [15, NULL];

// Variable para verificar si todos los ingredientes están presentes
$faltaIngrediente = false;
$ingredienteFaltante = "";

if (!validarIngredientes ($ingredientes,$cantidades,true)){
    echo "No se puede preparar la Carlota por que falta " . $ingredienteFaltante . ".";
}
else{
    if (!validarIngredientes ($ingredientessolidos,$cantidadessolidos,false)){
        echo "No se puede preparar la Carlota por que falta " . $ingredienteFaltante . ".";
    }
    else{
        echo "¡Todo listo!";
    }
}


/*for ($i = 0; $i < count($ingredientes); $i++) {
    if ($cantidades[$i] or $cantidades[$i] !== NULL) {
        echo ($i+1) . ". " . $cantidades[$i] . " lata de " . $ingredientes[$i] . "\n";
    } else {
        echo ($i+1) . ". No tenemos " . $ingredientes[$i] . ".\n";
        $faltaIngrediente = true;
        $ingredienteFaltante = $ingredientes[$i];
        break; // Salimos del ciclo si falta algún ingrediente
    }
}
for ($i = 0; $i < count($ingredientessolidos); $i++) {
    if ($cantidadessolidos[$i] or $cantidadessolidos[$i] !== NULL) {
        echo ($i+1) . ". " . $cantidadessolidos[$i] . "  " . $ingredientessolidos[$i] . "\n";
    } else {
        echo ($i+1) . ". No tenemos " . $ingredientessolidos[$i] . ".\n";
        $faltaIngrediente = true;
        $ingredienteFaltante = $ingredientessolidos[$i];
        break; // Salimos del ciclo si falta algún ingrediente
    }
}*/
function validarIngredientes($ingredientes,$cantidades,$lata){
    $tipo = " ";
    if ($lata)
      $tipo = "lata de";
    
    for ($i = 0; $i < count($ingredientes); $i++) {
        if ($cantidades[$i] or $cantidades[$i] !== NULL) {
            echo ($i+1) . ". " . $cantidades[$i] .  $tipo  . $ingredientes[$i] . "\n";
        } else {
            echo ($i+1) . ". No tenemos " . $ingredientes[$i] . ".\n";
            /*$faltaIngrediente = true;
            $ingredienteFaltante = $ingredientes[$i];
            break; // Salimos del ciclo si falta algún ingrediente*/
            return false;
        }
    }
    return true;
}

// Resultado final
/* ($faltaIngrediente) {
    echo "No se puede preparar la Carlota por que falta " . $ingredienteFaltante . ".";
} else {
    echo "¡Todo listo!";
}*/
?>
