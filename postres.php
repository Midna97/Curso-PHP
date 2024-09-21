<?php
header('Content-Type', 'application/json');

if($_SERVER['REQUEST_METHOD'] == 'GET'){
    $postres = $_GET['postres'];

    switch ($postres){
        case 'tarta':
            echo json_encode([
                'success' => true,
                 'title' => "Tarta",
                 'description' => "Tarta",
                 'instructions' => "Para la base, mezcla las galletas Marías con ½ barra de mantequilla, vierte en un molde para tarta, presiona ligeramente para formar una costra y refrigera.Para el relleno, bate el Chocolate para Mesa ABUELITA® con la crema batida y agrega poco a poco ½ barra de mantequilla. Vierte la mezcla en el molde para tarta y refrigera. Decora con los frutos rojos y las hojas de menta."
            ]);
            break;
        case 'mouse':
            echo json_encode([
                'success' => true,
                'title' => "Mouse",
                'description' => "Mouse",
                'instructions' => "Calentar en una cazuela la leche y la crema de coco. Disolver en la mezcla la gelatina y dejar enfriar. Batir las claras a punto de nieve. Montar la nata. Añadir la leche de coco a la nata montada y se mezcla todo con movimiento envolvente. Añadir finalmente las claras montadas con movimiento envolvente y dejar enfriar en copas." 
            ]);
            break;
        case 'carlota':
            echo json_encode([
                'success' => "Carlota",
                'title' => "Carlota",
                'instructions' => "Licúa leche condensada con leche evaporada y sin dejar de licuar, agrega el jugo de limón. En un refractario, coloca una capa de galletas, un poco de la mezcla de limón y repite hasta terminar."
            ]);
            break;
    }
}
?>