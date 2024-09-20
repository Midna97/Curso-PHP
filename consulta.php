<?php
header('Content-Type', 'application/json');
//$input = file_get_contents('php://input');
//$data = json_decode($input,true); El método GET  solo recibe parametros, no un body asi que no es necesario leer el archivo json.

if($_SERVER['REQUEST_METHOD'] == 'GET'){
    $alimentos = $_GET['alimentos'];

    switch ($alimentos){
        case 'lasagna':
            echo json_encode([
                'success' => true,
                 'title' => "Lasagna",
                 'description' => "Lasagna tradicional",
                 'instructions' => "Precalienta el Horno a 180º. Aparte acitrona la cebolla, la zanahora y cocina por 5 min. Añade la carne, cocina 5 min y agrega el jitomate. En un recipiente agrega una capa con la pasta, seguido de una capa de carne, encìma agergar queso. Repetir el proceso hasta llenar el recipiente, tapa y cocina a 180º por media hora."
            ]);
            break;
        case 'burrito':
            echo json_encode([
                'success' => true,
                'title' => "Burrito",
                'description' => "Burrito",
                'instructions' => "En una sartén, calienta el aceite y fríe ½ cebolla hasta que cambie de color. Agrega el ajo, la carne, el Jugo MAGGI®, la Salsa Tipo Inglesa CROSSE & BLACKWELL®, 2 chiles, la sal con ajo y el perejil; cocina por 3 minutos. Rellena las tortillas con la preparación de carne, añade frijoles y queso, doblas las orillas y enrolla. Ásalos en una sartén por ambos lados y corta a la mitad." 
            ]);
            break;
        case 'tacos':
            echo json_encode([
                'success' => "Tacos",
                'title' => "Tacos",
                'instructions' => "Poner a fuego medio, agregar la carne, la paprika, y cocinar por 10 minutos revolviendo constantemente. En un sartén a fuego alto, calentar las tortillas por ambos lados. En cada tortilla, colocar 3 cucharadas de carne, 2 cucharadas de pico de gallo y 1 cucharada de Queso Americano. "
            ]);
            break;
    }
}
?>