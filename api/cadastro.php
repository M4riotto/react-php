<?php

require ('config/cors.php'); 
// Habilitar CORS para somente undertakehigh.com.br/teste
//header("Access-Control-Allow-Origin: https://undertakehigh.com.br/teste");
//header("Access-Control-Allow-Methods: POST, OPTIONS");
//header("Access-Control-Allow-Headers: Content-Type");
//header("Access-Control-Max-Age: 86400"); // Tempo de cache para opções pré-voo (em segundos)


// Verificar se a requisição é OPTIONS e retornar apenas os cabeçalhos CORS
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
  http_response_code(200);
  exit();
}

$response_json = file_get_contents("php://input");
$dados = json_decode($response_json, true);
if (isset($dados["nome"]) && isset($dados["email"])) {
  // Obtém os dados enviados pelo React
  $nome = $dados["nome"];
  $email = $dados["email"];

  // Aqui você pode realizar ações adicionais, como salvar no banco de dados, enviar e-mails, etc.

  // Retorna uma resposta simples em formato JSON
  $result = array("mensagem" => "Cadastro realizado com sucesso!");

  header('Content-Type: application/json'); // para ser enviado no formato json.
  echo json_encode($result); // exibir o resultado.
} else {
  http_response_code(400); // Código HTTP 400 - Requisição inválida
  $response = array("mensagem" => "Dados inválidos na requisição");
  echo json_encode($response);
}

?>
