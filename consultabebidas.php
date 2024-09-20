<?php
header('Content-Type', 'application/json');

if($_SERVER['REQUEST_METHOD'] == 'GET'){
    $bebidas = $_GET['bebidas'];

    switch ($bebidas){
        case 'mojito':
            echo json_encode([
                'success' => true,
                 'title' => "Mojito",
                 'description' => "Mojito de fresa",
                 'instructions' => "En un vaso alto agregar hojas de menta y azúcar.Añada la pulpa de fresa, la soda, el jugo de limón y si lo desea el ron."
            ]);
            break;
        case 'limonada':
            echo json_encode([
                'success' => true,
                'title' => "Limonada",
                'description' => "Limonada",
                'instructions' => "Lava bien un limón y retírale la piel (sin la parte blanca). Pon la piel en el vaso de la batidora. Pela los 4 limones de modo que solo queden los gajos, sin piel ni parte blanca. Retira las pepitas.Pon los limones y el azúcar en el vaso de la batidora y tritura todo. Añade el hielo y el agua al vaso de la batidora. Tritura de nuevo hasta que quede todo bien integrado. Cuela la limonada." 
            ]);
            break;
        case 'naranjada':
            echo json_encode([
                'success' => "Naranjada",
                'title' => "Naranjada",
                'instructions' => "Lavar y pelar la naranja, poner en la licuadora con el agua y azúcar. Naranjada mineral. Licuar y colar en la jarra donde la presentarán. Poner poco a poco el agua mineral para así conservar más su sabor."
            ]);
            break;
    }
}
?>