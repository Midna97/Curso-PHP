<?php
header('Content-Type: application/json'); // Para que el navegador reconozca la 
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($data['user'], $data['password'])) {
    $user = $data['user'];
    $password = $data['password'];

    // Consulta para obtener el usuario
    /*$sql = "SELECT * FROM usuarios WHERE user = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('s', $user);
    $stmt->execute();
    $result = $stmt->get_result();*/

   /* if ($result->num_rows === 1) {
        $user = $result->fetch_assoc();*/

        // Verificar la contraseña
        /*if (password_verify($password, $user['password'])) {
            echo json_encode([
                'success' => true,
                'nombre' => $user['nombre']
            ]);
        } else {
            echo json_encode([
                'success' => false,
                'message' => 'Contraseña incorrecta.'
            ]);
        }*/
    /*} else {
        echo json_encode([
            'success' => false,
            'message' => 'Usuario no encontrado.'
        ]);
    }*/


//Quitar cuando tengas la conexion
   echo json_encode([
        'success' => true,
        'user' => $user
    ]);
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Solicitud inválida.'
    ]);
}


/*if (isset($_POST['user'])){
    $user = $_POST['user'];
    $password = $_POST['password'];
    header('Location: recetario.html');
    exit();
}*/
?>