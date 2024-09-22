<?php

include "PruebaBD.php";

header('Content-Type', 'application/json');
//$input = file_get_contents('php://input');
//$data = json_decode($input,true); El método GET  solo recibe parametros, no un body asi que no es necesario leer el archivo json.

if($_SERVER['REQUEST_METHOD'] == 'GET'){
    $alimentos = $_GET['alimentos'];

    /*switch ($alimentos){
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

    }*/

    try{

    

    // Consulta para obtener el usuario
    $sql = "SELECT * FROM recetas WHERE titulo = :title";
    $stmt = $conn->prepare($sql);
    $stmt->execute(['title' => $alimentos]);
    $result = $stmt->fetchALL(PDO::FETCH_ASSOC);

    foreach ($result as $item) {
        echo json_encode([
            'success' => true,
            'title' => $item['titulo'],
            'description' => $item['descripcion'],
            'instructions' => $item['instrucciones'],
        ]);      
    }   
    
}      

catch (PDOException $error){
    echo json_encode([
        'success' => false,
        'message' => 'Receta no encontrada',
        
    ]);    


}

   
   
   //Estilo por procedimientos

   /*$enlace = mysqli_connect("localhost", "sa", "", "world");
   
   // comprobar la conexión 
   if (mysqli_connect_errno()) {
       printf("Falló la conexión: %s\n", mysqli_connect_error());
       exit();
   }
   
   $ciudad = "Amersfoort";
   
   // crear una sentencia preparada 
   $sentencia = mysqli_stmt_init($enlace);
   if (mysqli_stmt_prepare($sentencia, 'SELECT District FROM City WHERE Name=?')) {
   
        //vincular los parámetros para los marcadores 
       mysqli_stmt_bind_param($sentencia, "s", $ciudad);
   
    // ejecutar la consulta 
       mysqli_stmt_execute($sentencia);
   
       //vincular las variables de resultados 
       mysqli_stmt_bind_result($sentencia, $distrito);
   
       // obtener el valor 
       mysqli_stmt_fetch($sentencia);
   
       printf("%s está en el distrito de %s\n", $ciudad, $distrito);
   
       // cerrar la sentencia 
       mysqli_stmt_close($sentencia);
   }
   
   //cerrar la conexión 
   mysqli_close($enlace);*/

   

}
?>