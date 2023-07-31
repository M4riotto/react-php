<?php

require ('config/cors.php'); 
require ('database.php'); 

// Verificar se a requisição é OPTIONS e retornar apenas os cabeçalhos CORS
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
  http_response_code(200);
  exit();
}

$response_json = file_get_contents("php://input");
$dados = json_decode($response_json, true);
if ($dados){

    $nome = $dados["nome"];
    $sobrenome = $dados["sobrenome"];
    $email = $dados["email"]; 
    $cpf = $dados["cpf"]; 
    $empresa = $dados["empresa"]; //name do input
    $telefone = $dados["telefone"];   
    $senha = $dados["senha"];   
    $senhaHash = password_hash($senha, PASSWORD_DEFAULT);

  // Aqui você pode realizar ações adicionais, como salvar no banco de dados, enviar e-mails, etc.
  try {
    $stmt = $connect->prepare("INSERT INTO criadores (nome, sobrenome, email, cpf, empresa, telefone, senha_usuario) VALUES (:nome, :sobrenome, :email, :cpf, :empresa,  :telefone, :senha_usuario)");

    $stmt->bindParam(':nome', $nome);
    $stmt->bindParam(':sobrenome', $sobrenome);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':cpf', $cpf);
    $stmt->bindParam(':empresa', $empresa);
    $stmt->bindParam(':telefone', $telefone);
    $stmt->bindParam(':senha_usuario', $senhaHash);

    $stmt->execute();
    // echo "Cadastro com sucesso!";
    $id = $connect->lastInsertId();

    $result["success"]["message"] = "Cadastrado com sucesso!"; //criamos o array para devolver o resultado do insert numa mensagem de sucesso.

    $result["data"]["id"] = $id; //criamos o array para devolver o resultado do insert com os dados inseridos.
    $result["data"]["nome"] = $nome;
    $result["data"]["sobrenome"] = $sobrenome;
    $result["data"]["email"] = $email;
    $result["data"]["cpf"] = $cpf;
    $result["data"]["empresa"] = $empresa;
    $result["data"]["telefone"] = $telefone;
    $result["data"]["senha"] = $senhaHash;

    header('Content-Type: application/json'); // para ser enviado no formato json.
    echo json_encode($result); // exibir o resultado.
  }
  catch (PDOException $erro) {
    echo "connect failed: " . $erro->getMessage();
}
} else {
  http_response_code(400); // Código HTTP 400 - Requisição inválida
  $response = array("mensagem" => "Dados inválidos na requisição");
  echo json_encode($response);
}

?>
