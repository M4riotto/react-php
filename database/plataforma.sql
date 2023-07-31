-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 31-Jul-2023 às 21:26
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `plataforma`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `criadores`
--

CREATE TABLE `criadores` (
  `id` int(11) NOT NULL,
  `nome` varchar(250) NOT NULL,
  `sobrenome` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `cpf` varchar(15) NOT NULL,
  `empresa` varchar(100) NOT NULL,
  `telefone` varchar(15) NOT NULL,
  `senha_usuario` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Extraindo dados da tabela `criadores`
--

INSERT INTO `criadores` (`id`, `nome`, `sobrenome`, `email`, `cpf`, `empresa`, `telefone`, `senha_usuario`) VALUES
(1, 'Exemplo', 'teste', 'exemplo@example.com', '45645645645', 'local', '123998756425', '$2y$10$Ul635YoxSFpXVBwf6lxc3eUBClk4W4JEUPU0dXKQACU2S9D2Vr1Rm'),
(2, 'vtor', 'mariotto', 'vitor@@gmail.com', '12345678910', 'undertake', '12998654875', '$2y$10$Px1SU58NM0tylxiL0M.J2uGQHbE1mX5G47lx63KK5xUogYc9tDxRi'),
(3, 'xoxo', 'siqueira', 'teste@gmail.com', '12345678920', 'letsgola', '(12)9 9587-6584', '$2y$10$LsSbtWUb62DaoCdhSenvP.1iqPotf2VszybbEEdaY4LQQiyihV/tq');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `criadores`
--
ALTER TABLE `criadores`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `criadores`
--
ALTER TABLE `criadores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
