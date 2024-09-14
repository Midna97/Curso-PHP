<?php
if (isset($_POST['user'])){
    $user = $_POST['user'];
    $clave = $_POST['clave'];
    header('Location: Recetario.html');
    exit();
}
?>