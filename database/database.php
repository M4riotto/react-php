<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$database = 'plataforma';
// $servername = 'mysql.hostinger.com.br';

try {
    $connect = new PDO("mysql:host=$servername; dbname=$database", $username, $password);
    $connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // echo "database connect";
} catch (PDOException $erro) {
    echo "connection failed: " . $erro->getMessage();
}
?>