<?php
    $listaUsuario = [];
    $listaUsuario[] = array('login' => 'arthur@gmail.com','senha' => '1234', 'nome' => 'Arthur', 'id' => 1);
    $listaUsuario[] = array('login' => 'julio@gmail.com','senha' => '1234', 'nome' => 'Julio', 'id' => 2);
    $listaUsuario[] = array('login' => 'borges@gmail.com','senha' => '1234', 'nome' => 'Borges', 'id' => 3);
    $listaUsuario[] = array('login' => 'carlos@gmail.com','senha' => '1234', 'nome' => 'Carlos', 'id' => 4);

    $login = $_POST["login"];
    $senha = $_POST["senha"];

    $retorno = [
        "msg" => "Falha de login",
        "value" => false,
        "usuario" => null
    ];

    
    foreach ($listaUsuario as $verify) {
        if ($verify["login"] == $login && $verify["senha"] == $senha) {
            $retorno["msg"] = "login autenticado.";
            $retorno["value"] = true;
            $retorno["usuario"] = $verify["nome"];
            $retorno["id"] = $verify["id"];
            break;
        }
    }

    header("Content-Type: application/json; charset = UTF-8");
    echo json_encode($retorno);
?>