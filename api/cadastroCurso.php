<?php

require('config/cors.php');
require('./database/database.php');

// Verificar se a requisição é OPTIONS e retornar apenas os cabeçalhos CORS
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
  http_response_code(200);
  exit();
}

$response_json = file_get_contents("php://input");
$dados = json_decode($response_json, true);

if ($dados) {
  $id_criador = $dados["idPessoaLogada"];
  $titulo = $dados["titulo"];
  $descricao = $dados["descricao"];
  $aula = $dados["aula"];

  // Aqui você pode realizar ações adicionais, como salvar no banco de dados, enviar e-mails, etc.
  try {
    $stmt = $connect->prepare("INSERT INTO cursos (id_criador, titulo, descricao, aula) VALUES (:id_criador, :titulo, :descricao, :aula)");

    $stmt->bindParam(':id_criador', $id_criador);
    $stmt->bindParam(':titulo', $titulo);
    $stmt->bindParam(':descricao', $descricao);
    $stmt->bindParam(':aula', $aula);

    $stmt->execute();
    $id = $connect->lastInsertId();

    $result["success"]["message"] = "Cadastrado com sucesso!";
    $result["data"]["id"] = $id;
    $result["data"]["id_criador"] = $id_criador;
    $result["data"]["titulo"] = $titulo;
    $result["data"]["descricao"] = $descricao;
    $result["data"]["aula"] = $aula;

    header('Content-Type: application/json');
    echo json_encode($result);
  } catch (PDOException $erro) {
    echo "connect failed: " . $erro->getMessage();
  }
} else {
  http_response_code(400);
  $response = array("mensagem" => "Dados inválidos na requisição");
  echo json_encode($response);
}

?>
