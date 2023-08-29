-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Generation Time: May 03, 2023 at 01:51 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ia-project`
--

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

CREATE TABLE `answers` (
  `id` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `priority` int(11) NOT NULL,
  `question_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `answers`
--

INSERT INTO `answers` (`id`, `description`, `priority`, `question_id`) VALUES
(20, '1.Spain', 1, 156),
(21, '2.france', 2, 156),
(22, '3.Egypt', 99, 156),
(23, '4.France', 4, 156),
(24, '1.Today is September 26th', 1, 166),
(25, '2.TODAY IS october 26TH', 2, 166),
(26, '3.TODAY IS november 26TH', 99, 166),
(27, '4.TODAY IS April 26TH', 3, 166),
(28, '1.My garden has different flowers', 1, 167),
(29, '2.My garden has different colors', 99, 167),
(30, '3.My house has different colors', 3, 167),
(31, '4.My house has different flowers', 4, 167),
(32, '1.The Bright family left on saturday', 1, 168),
(33, '2.The Bright family left on sunday', 2, 168),
(34, '3.The Bright family left on monday', 3, 168),
(35, '4.The Bright family left on Friday', 99, 168),
(36, '1.First snowfall', 99, 169),
(37, '2.First snow ball', 2, 169),
(38, '3.First fire ball', 3, 169),
(39, '4.First slowfall', 4, 169),
(40, '1. The snow finally dropped', 1, 170),
(41, '2. The snow finally stopped', 99, 170),
(42, '3. The clow finally stopped', 3, 170),
(43, '4. The snow actually stopped', 4, 170),
(53, '1.It can get very icy and bold in the summer', 1, 171),
(54, '2.It can get very icy and cold in the winter', 99, 171),
(55, '3.It can get very icy and cold in the summer', 3, 171),
(56, '4.It can get very icy and bold in the winter', 4, 171),
(57, '1.Once the call is over', 1, 172),
(58, '2.Once the fall is slower', 2, 172),
(59, '3.Once the fall is over', 99, 172),
(60, '4.Once the call is slower', 4, 172),
(61, '1.Joe saves all his money', 99, 173),
(62, '2.Joe saves all his honey', 2, 173),
(63, '3.Joe saves all his sunny', 3, 173),
(64, '4.Joy saves all her money', 4, 173),
(65, '1.joe is very sad', 1, 174),
(66, '2.joe is very happy', 99, 174),
(67, '3.joe is very angry', 3, 174),
(68, '4.joe is very wealthy', 4, 174);

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(55) NOT NULL,
  `name` varchar(255) NOT NULL,
  `audio_file` varchar(555) NOT NULL,
  `status` enum('active','inactive') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `name`, `audio_file`, `status`) VALUES
(156, 'What\'s the name of the country you heard?', '1683087364054.mp3', 'active'),
(166, 'What is the correct date from what you heard?', '1683087597533.mp3', 'active'),
(167, 'What is the correct sentence from what you heard?', '1683087527232.mp3', 'active'),
(168, 'What is the correct sentence from what you heard?', '1683087626752.mp3', 'active'),
(169, 'What is the correct sentence from what you heard?', '1683087645395.mp3', 'active'),
(170, 'What is the correct sentence from what you heard?', '1683087676474.mp3', 'active'),
(171, 'What is the correct sentence from what you heard?', '1683107422851.mp3', 'active'),
(172, 'What is the correct sentence from what you heard?', '1683107655694.mp3', 'active'),
(173, 'What is the correct sentence from what you heard?', '1683107683573.mp3', 'active'),
(174, 'What is the correct sentence from what you heard?', '1683107703428.mp3', 'active');

-- --------------------------------------------------------

--
-- Table structure for table `results`
--

CREATE TABLE `results` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `score` int(10) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0 -> in-Active user\r\n1 -> Active user',
  `token` varchar(255) NOT NULL,
  `role` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0->normal user\r\n1->admin user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `phone`, `status`, `token`, `role`) VALUES
(1, 'abdelkhalek', 'admin@gmail.com', '$2b$10$hAsL2dOWcZsJo9DsKVemzucrbnswB9M3AacqixWoJ5sQmDERqercq', '15421542111', 1, '863d02380ad4b7693eab47eecba0b53e', 1),
(38, 'ronaldo', 'ronaldo@fifa.com', '$2b$10$pGbXQHl4cSQih3PWY0KxseIuB/XI7wQsRl4QIU40Ye6QcFqIAHULC', '1234557', 1, '1320434e54f809492c2e3485f6555ef8', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `question_id` (`question_id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `results`
--
ALTER TABLE `results`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answers`
--
ALTER TABLE `answers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(55) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=175;

--
-- AUTO_INCREMENT for table `results`
--
ALTER TABLE `results`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `answers`
--
ALTER TABLE `answers`
  ADD CONSTRAINT `answers_ibfk_1` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`);

--
-- Constraints for table `results`
--
ALTER TABLE `results`
  ADD CONSTRAINT `results_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
