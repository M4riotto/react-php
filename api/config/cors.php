<?php
// Habilitar CORS somente para 'https://rotiv.netlify.app'
header("Access-Control-Allow-Origin: https://rotiv.netlify.app");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Max-Age: 86400"); // Tempo de cache para opções pré-voo (em segundos)
