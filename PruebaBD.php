<?php
$serverName = "127.0.0.1";
$database = "curso";
$username = "sa"; 
$password = "A159632**"; // Contraseña de SQL Server
$port=1433;

try {
    $dns = "sqlsrv:server=$serverName,$port;Database=$database";
    $conn = new PDO($dns, $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Conexión exitosa a SQL Server.";
} catch (PDOException $e) {
    echo "Conexión fallida: " . $e->getMessage();
}
?>