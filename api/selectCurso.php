<?php

    require ('config/cors.php');
    require ('./database/database.php');

    try {
        $stmt = $connect->prepare("SELECT * FROM cursos INNER JOIN criador ON cursos.id_criador = criadorers.id;");
        
        $stmt->execute();

        $eventos = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $result["success"]["message"] = "Curso listada com sucesso"; //criamos o array para devolver o resultado do insert numa mensagem de sucesso.

        $result["data"] = $eventos; //criamos o array para devolver o resultado do insert com os dados inseridos.

        header('Content-Type: Text/json'); //para ser enviado no formato json.
        echo json_encode($result); //exibir o resultado.
    } catch (PDOException $erro) {
        echo "falha ao cadastrar" . $erro->getMessage();
    }
?>