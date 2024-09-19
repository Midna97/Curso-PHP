<?php
header('Content-Type', 'application/JSON');
$input = file_get_contents('php://input');
$data = json_decode($input,true);

if($_SERVER['REQUEST_METHOD' == 'GET']){
    $alimentos= $data['alimentos'];

    switch ($alimentos){
        case 'lasagna':
            echo json_encode([
                'success' => true,
                 'title' => "Lasagna",
                 'description' => "Lasagna tradicional",
                 'instructions' => "Precalienta el Horno a 180º. Aparte acitrona la cebolla, la zanahora y cocina por 5 min. Añade la carne, cocina 5 min y agrega el jitomate. En un recipiente agrega una capa con la pasta, seguido de una capa de carne, encìma agergar queso. Repetir el proceso hasta llenar el recipiente, tapa y cocina a 180º por media hora."
            ]);
            break;
    }
}
?>