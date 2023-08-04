<?php
// Habilitar CORS para somente undertakehigh.com.br/teste
header("Access-Control-Allow-Origin: https://undertakehigh.com.br/api/");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Max-Age: 86400"); // Tempo de cache para opções pré-voo (em segundos)