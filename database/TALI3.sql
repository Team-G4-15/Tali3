-- phpMyAdmin SQL Dump
-- version 5.1.4deb1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 07, 2023 at 04:36 PM
-- Server version: 8.0.32-0ubuntu0.22.10.2
-- PHP Version: 8.1.7-1ubuntu3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `TALI3`
--
CREATE DATABASE IF NOT EXISTS `TALI3` DEFAULT CHARACTER SET geostd8 COLLATE geostd8_general_ci;
USE `TALI3`;

-- --------------------------------------------------------

--
-- Table structure for table `author`
--

DROP TABLE IF EXISTS `author`;
CREATE TABLE IF NOT EXISTS `author` (
  `author_id` int NOT NULL AUTO_INCREMENT,
  `author_name` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`author_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
CREATE TABLE IF NOT EXISTS `book` (
  `book_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(480) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `keywords` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `description` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `type` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `quantity` int NOT NULL,
  `location_id` int NOT NULL,
  `language_code` varchar(35) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `vendor_id` int NOT NULL,
  `field_name` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `isbn` varchar(13) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `edition` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `publish_date` date DEFAULT NULL,
  PRIMARY KEY (`book_id`),
  KEY `Fk_language_books` (`language_code`),
  KEY `Fk_field_books` (`field_name`),
  KEY `Fk_vendor_books` (`vendor_id`),
  KEY `Fk_location_books` (`location_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `copy`
--

DROP TABLE IF EXISTS `copy`;
CREATE TABLE IF NOT EXISTS `copy` (
  `book_id` int NOT NULL,
  `copy_number` int NOT NULL,
  `reception_date` date DEFAULT NULL,
  PRIMARY KEY (`book_id`,`copy_number`),
  KEY `copy_number_idx` (`copy_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `current_loan`
--

DROP TABLE IF EXISTS `current_loan`;
CREATE TABLE IF NOT EXISTS `current_loan` (
  `loan_id` int NOT NULL AUTO_INCREMENT,
  `due_date` datetime NOT NULL,
  `renewal_count` int NOT NULL DEFAULT '0',
  `loan_date` datetime NOT NULL,
  `email` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `patron_email` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `book_id` int NOT NULL,
  `copy_number` int NOT NULL,
  PRIMARY KEY (`loan_id`),
  KEY `Fk_patron_current_loan` (`patron_email`),
  KEY `Fk_librarian_current_loan` (`email`),
  KEY `Fk_books_current_loan` (`book_id`),
  KEY `Fk_copy_current_loan` (`copy_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `field`
--

DROP TABLE IF EXISTS `field`;
CREATE TABLE IF NOT EXISTS `field` (
  `field_name` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `field_keywords` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  PRIMARY KEY (`field_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

DROP TABLE IF EXISTS `history`;
CREATE TABLE IF NOT EXISTS `history` (
  `loan_id` int NOT NULL,
  `email` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `book_id` int NOT NULL,
  `patron_email` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `copy_number` int NOT NULL,
  `loan_date` datetime NOT NULL,
  `due_date` datetime NOT NULL,
  `return_date` datetime NOT NULL,
  `renewal_count` int NOT NULL,
  PRIMARY KEY (`loan_id`),
  KEY `Fk_librarian_history` (`email`),
  KEY `Fk_patron_history` (`patron_email`),
  KEY `Fk_books_history` (`book_id`),
  KEY `Fk_copy_history` (`copy_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `language`
--

DROP TABLE IF EXISTS `language`;
CREATE TABLE IF NOT EXISTS `language` (
  `language_code` varchar(35) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `language` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`language_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `librarian`
--

DROP TABLE IF EXISTS `librarian`;
CREATE TABLE IF NOT EXISTS `librarian` (
  `email` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `full_name` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `library_id` int NOT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `remember_token` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Fk_library_librarian` (`library_id`),
  KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `librarian`
--

INSERT INTO `librarian` (`email`, `full_name`, `password`, `library_id`, `id`, `remember_token`, `created_at`, `updated_at`) VALUES
('raid.ouahioune@ensia.edu.dz', 'Raid Abderrezak Ouahioune', '$2y$10$GqvjgD5jnqdfwu.HoEeWDOf4itBq0ZZdmODgEk3v7v77tDAdeNHaS', 1, 2, NULL, '2023-05-06 15:13:18', '2023-05-06 15:13:18'),
('raidrockstar040@gmail.com', 'Raid Abderrezak Ouahioune', '$2y$10$ztSfz6Gne3MUf7qDzZvo9O0PeST8IeXNX8TV90HVAMRLzlgP.MW0y', 1, 3, NULL, '2023-05-06 16:23:16', '2023-05-06 16:23:16'),
('sqssqsq@sq.com', 'Raid Abderrezak Ouahioune', '$2y$10$POheeiAlKuVeuKQ6JHPxb.c5IYiS2MnFYuE.g6mmxbBKeYzCICxB6', 1, 4, NULL, '2023-05-07 09:53:57', '2023-05-07 09:53:57'),
('yazid@gmailcom', 'Raid Abderrezak Ouahioune', '$2y$10$KN/iKxQlRxs8BLZpiKABkeRKaK/sfQcriMAuXBGGtEoVNwjpea30m', 1, 5, NULL, '2023-05-07 10:08:55', '2023-05-07 10:08:55');

-- --------------------------------------------------------

--
-- Table structure for table `library`
--

DROP TABLE IF EXISTS `library`;
CREATE TABLE IF NOT EXISTS `library` (
  `library_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `department` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `university_id` int NOT NULL,
  PRIMARY KEY (`library_id`),
  KEY `Fk_university_library` (`university_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `library`
--

INSERT INTO `library` (`library_id`, `name`, `department`, `university_id`) VALUES
(1, 'Example Library', 'Example Department', 1);

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
CREATE TABLE IF NOT EXISTS `location` (
  `location_id` int NOT NULL AUTO_INCREMENT,
  `aisle` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `shelf` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `type` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`location_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `lost_books`
--

DROP TABLE IF EXISTS `lost_books`;
CREATE TABLE IF NOT EXISTS `lost_books` (
  `copy_number` int NOT NULL,
  `reception_date` datetime NOT NULL,
  `lost_date` datetime NOT NULL,
  `reason` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `book_id` int NOT NULL,
  PRIMARY KEY (`copy_number`,`email`,`book_id`),
  KEY `Fk_librarian_lost_bookss` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `old_renewals`
--

DROP TABLE IF EXISTS `old_renewals`;
CREATE TABLE IF NOT EXISTS `old_renewals` (
  `history_loan_id` int NOT NULL,
  `renewal_date` datetime NOT NULL,
  `old_due_date` datetime NOT NULL,
  `due_date` datetime NOT NULL,
  PRIMARY KEY (`history_loan_id`,`renewal_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
CREATE TABLE IF NOT EXISTS `password_reset_tokens` (
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `patron`
--

DROP TABLE IF EXISTS `patron`;
CREATE TABLE IF NOT EXISTS `patron` (
  `patron_email` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `first_name` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `last_name` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `type` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `university_id` int NOT NULL,
  PRIMARY KEY (`patron_email`),
  KEY `Fk_university_patron` (`university_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 11, 'main', '12b106068746f82f039bd2a4d2d0c0bd047be28da5fdd2e058988eed22a88783', '[\"*\"]', NULL, NULL, '2023-04-20 08:47:40', '2023-04-20 08:47:40'),
(4, 'App\\Models\\User', 11, 'main', 'a9e0f0f92b93b4939c9a922396570219a6bb1259a4870323523b0ddb1458cd0a', '[\"*\"]', NULL, NULL, '2023-04-20 12:25:13', '2023-04-20 12:25:13'),
(5, 'App\\Models\\User', 11, 'main', 'ded4ff4967e4649885a7d08b118039ff371a35caa83a70d182010f46aedc7aa7', '[\"*\"]', NULL, NULL, '2023-04-20 15:15:15', '2023-04-20 15:15:15'),
(12, 'App\\Models\\User', 11, 'main', '2581d716b679a3d5a6414bfe5433e220727a642bbdb8eb8f0e4a9ba460bf592b', '[\"*\"]', NULL, NULL, '2023-04-26 09:44:44', '2023-04-26 09:44:44'),
(13, 'App\\Models\\User', 11, 'main', 'fee2f540ce41fc2ae8810ccb3f9c7db7d7f8dab72c4fc8881937275917fe31a2', '[\"*\"]', NULL, NULL, '2023-04-26 09:45:21', '2023-04-26 09:45:21'),
(14, 'App\\Models\\User', 11, 'main', 'ceaf73f0c4a34f964ace6a85f289682a71f726b67594f1fd674dd49ae17bf1fe', '[\"*\"]', NULL, NULL, '2023-04-26 09:45:58', '2023-04-26 09:45:58'),
(15, 'App\\Models\\User', 11, 'main', 'b82f7205ff4601e0e69c28edde5f7d176fe6099752868e7c7f1821c498eb5e54', '[\"*\"]', NULL, NULL, '2023-04-26 10:16:44', '2023-04-26 10:16:44'),
(17, 'App\\Models\\User', 11, 'main', '2e0be5bb9d1c07bc070309e07a382cb5633f9ef6524fa082de40f4e9017f63ab', '[\"*\"]', NULL, NULL, '2023-04-26 10:29:20', '2023-04-26 10:29:20'),
(22, 'App\\Models\\User', 11, 'main', 'bee354bdcb33ed6bc53e21ce589fc01d1596f3bfecf9979883e01df46e067310', '[\"*\"]', NULL, NULL, '2023-04-26 10:45:00', '2023-04-26 10:45:00'),
(23, 'App\\Models\\User', 11, 'main', 'cafc076ab72dec92fff4dea1b1abd01f7588c2b78cd748372e0509c73c9f68fc', '[\"*\"]', NULL, NULL, '2023-04-26 10:45:03', '2023-04-26 10:45:03'),
(24, 'App\\Models\\User', 11, 'main', '1c10b8d58a724c08bd029de95bb504533c10a1138784730ae8b952b906fed375', '[\"*\"]', NULL, NULL, '2023-04-26 10:45:18', '2023-04-26 10:45:18'),
(29, 'App\\Models\\librarian', 2, 'main', 'fbeb18047976eb5c9fafe348ff117f9d207b5e79d0d907159475abc5329c5944', '[\"*\"]', NULL, NULL, '2023-05-06 15:13:18', '2023-05-06 15:13:18'),
(30, 'App\\Models\\librarian', 2, 'main', '9b9cb2dcd81040af5767993458ce0fb50a7aab6b6bce8c4d9994e37b5dea9d0d', '[\"*\"]', NULL, NULL, '2023-05-06 15:50:09', '2023-05-06 15:50:09'),
(31, 'App\\Models\\librarian', 3, 'main', '3499082edb37a7077fdb4b865cc4dcc579486ed968b7c9676fb06e1484f501af', '[\"*\"]', NULL, NULL, '2023-05-06 16:23:16', '2023-05-06 16:23:16'),
(34, 'App\\Models\\librarian', 2, 'main', 'bcfc5c49e1ba7782d6fb99167387425e50f4b857dbfa029856c6530695f49323', '[\"*\"]', NULL, NULL, '2023-05-06 17:19:32', '2023-05-06 17:19:32'),
(35, 'App\\Models\\librarian', 2, 'main', '7cb6359fb823b67ae74aa38551f2256bb7920aa6901ffb987b4df46b194dc026', '[\"*\"]', NULL, NULL, '2023-05-06 22:40:34', '2023-05-06 22:40:34');

-- --------------------------------------------------------

--
-- Table structure for table `published`
--

DROP TABLE IF EXISTS `published`;
CREATE TABLE IF NOT EXISTS `published` (
  `author_id` int NOT NULL,
  `book_id` int NOT NULL,
  KEY `Fk_books_published` (`book_id`),
  KEY `Fk_author_published` (`author_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `renewals`
--

DROP TABLE IF EXISTS `renewals`;
CREATE TABLE IF NOT EXISTS `renewals` (
  `loan_id` int NOT NULL,
  `renewal_date` datetime NOT NULL,
  `old_due_date` datetime NOT NULL,
  `due_date` datetime NOT NULL,
  PRIMARY KEY (`loan_id`,`renewal_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `research_paper`
--

DROP TABLE IF EXISTS `research_paper`;
CREATE TABLE IF NOT EXISTS `research_paper` (
  `paper_id` int NOT NULL,
  `publish_date` date DEFAULT NULL,
  `doi` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`paper_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `university`
--

DROP TABLE IF EXISTS `university`;
CREATE TABLE IF NOT EXISTS `university` (
  `university_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `address` varchar(160) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `phone_number` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`university_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `university`
--

INSERT INTO `university` (`university_id`, `name`, `email`, `address`, `phone_number`) VALUES
(1, 'Example University', 'example@example.com', 'Example Address', '1234567890');

-- --------------------------------------------------------

--
-- Table structure for table `vendor`
--

DROP TABLE IF EXISTS `vendor`;
CREATE TABLE IF NOT EXISTS `vendor` (
  `vendor_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(320) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `phone_number` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `address` varchar(160) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `type` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`vendor_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `book`
--
ALTER TABLE `book`
  ADD CONSTRAINT `Fk_field_books` FOREIGN KEY (`field_name`) REFERENCES `field` (`field_name`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Fk_language_books` FOREIGN KEY (`language_code`) REFERENCES `language` (`language_code`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Fk_location_books` FOREIGN KEY (`location_id`) REFERENCES `location` (`location_id`),
  ADD CONSTRAINT `Fk_vendor_books` FOREIGN KEY (`vendor_id`) REFERENCES `vendor` (`vendor_id`);

--
-- Constraints for table `copy`
--
ALTER TABLE `copy`
  ADD CONSTRAINT `Fk_books_copy` FOREIGN KEY (`book_id`) REFERENCES `book` (`book_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `current_loan`
--
ALTER TABLE `current_loan`
  ADD CONSTRAINT `Fk_books_current_loan` FOREIGN KEY (`book_id`) REFERENCES `book` (`book_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Fk_copy_current_loan` FOREIGN KEY (`copy_number`) REFERENCES `copy` (`copy_number`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Fk_librarian_current_loan` FOREIGN KEY (`email`) REFERENCES `librarian` (`email`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Fk_patron_current_loan` FOREIGN KEY (`patron_email`) REFERENCES `patron` (`patron_email`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `history`
--
ALTER TABLE `history`
  ADD CONSTRAINT `Fk_books_history` FOREIGN KEY (`book_id`) REFERENCES `book` (`book_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Fk_copy_history` FOREIGN KEY (`copy_number`) REFERENCES `copy` (`copy_number`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Fk_librarian_history` FOREIGN KEY (`email`) REFERENCES `librarian` (`email`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Fk_patron_history` FOREIGN KEY (`patron_email`) REFERENCES `patron` (`patron_email`) ON UPDATE CASCADE;

--
-- Constraints for table `librarian`
--
ALTER TABLE `librarian`
  ADD CONSTRAINT `Fk_library_librarian` FOREIGN KEY (`library_id`) REFERENCES `library` (`library_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `library`
--
ALTER TABLE `library`
  ADD CONSTRAINT `Fk_university_library` FOREIGN KEY (`university_id`) REFERENCES `university` (`university_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `lost_books`
--
ALTER TABLE `lost_books`
  ADD CONSTRAINT `Fk_librarian_lost_bookss` FOREIGN KEY (`email`) REFERENCES `librarian` (`email`) ON UPDATE CASCADE;

--
-- Constraints for table `old_renewals`
--
ALTER TABLE `old_renewals`
  ADD CONSTRAINT `Fk_history_old_renewals` FOREIGN KEY (`history_loan_id`) REFERENCES `history` (`loan_id`);

--
-- Constraints for table `patron`
--
ALTER TABLE `patron`
  ADD CONSTRAINT `Fk_university_patron` FOREIGN KEY (`university_id`) REFERENCES `university` (`university_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `published`
--
ALTER TABLE `published`
  ADD CONSTRAINT `Fk_author_published` FOREIGN KEY (`author_id`) REFERENCES `author` (`author_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Fk_books_published` FOREIGN KEY (`book_id`) REFERENCES `book` (`book_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `renewals`
--
ALTER TABLE `renewals`
  ADD CONSTRAINT `Fk_current_loan` FOREIGN KEY (`loan_id`) REFERENCES `current_loan` (`loan_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `research_paper`
--
ALTER TABLE `research_paper`
  ADD CONSTRAINT `Fk_books_research_paper` FOREIGN KEY (`paper_id`) REFERENCES `book` (`book_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
