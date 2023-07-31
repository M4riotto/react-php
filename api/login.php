<?php

require ('config/cors.php');
require ('../database/database.php');

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit();
}

$response_json = file_get_contents("php://input");
$data = json_decode($response_json, true);

if ($data) {

    $cpf = $data["cpf"];
    $password = $data["senha"]; // Criptografa a senha usando SHA256

    try {
        // Preparação da consulta SQL
        $sql = 'SELECT * FROM criadores WHERE cpf = :cpf ';
        $stmt = $connect->prepare($sql);

        // Execução da consulta com parâmetros
        $stmt->execute(array(':cpf' => $cpf));

        // Obtenção do resultado
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        if (count($result) > 0) {

            if(password_verify($password, $result[0]['senha_usuario'])){
                // header("Location: Eventos_Cadastrados.php");
                echo 'okay';
            } else{
                exit;
            }
            // Se encontrou um usuário, retorna os detalhes do usuário
            $response = [
                'message' => 'Usuário Logado!',
                'user' => [
                    'nome' => $result[0]['nome'],
                    'cpf' => $result[0]['cpf'],
                    'senha' => $result[0]['senha_usuario'],
                    'sobrenome' => $result[0]['sobrenome']
                ]
            ];
            echo json_encode($response);
        } else {
            http_response_code(401);
            echo json_encode(['message' => 'Login ou senha inválidos. Acesso não autorizado!']);
        }
    } catch (PDOException $e) {
        // Em caso de erro, retorna a mensagem de erro no JSON
        http_response_code(500);
        echo json_encode(['message' => 'Erro no Banco de Dados']);
    }
} else {
    http_response_code(400);
    echo json_encode(['message' => 'Dados inválidos. Nenhum dado foi enviado via JSON.']);
}
