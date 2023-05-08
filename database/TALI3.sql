-- phpMyAdmin SQL Dump
-- version 5.1.4deb1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 08, 2023 at 06:10 PM
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

-- --------------------------------------------------------

--
-- Table structure for table `author`
--

CREATE TABLE IF NOT EXISTS `author` (
  `author_id` int NOT NULL AUTO_INCREMENT,
  `author_name` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`author_id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `author`
--

INSERT INTO `author` (`author_id`, `author_name`) VALUES
(1, 'Albert Einstein'),
(2, 'Marie Curie'),
(3, 'Charles Darwin'),
(4, 'Jane Austen'),
(5, 'William Shakespeare'),
(6, 'Stephen Hawking'),
(7, 'J.K. Rowling'),
(8, 'George Orwell'),
(9, 'Agatha Christie'),
(10, 'Nikola Tesla'),
(11, 'Leonardo da Vinci'),
(12, 'Isaac Newton'),
(13, 'Galileo Galilei'),
(14, 'Jane Goodall'),
(15, 'Harper Lee'),
(16, 'Ernest Hemingway'),
(17, 'Fyodor Dostoevsky'),
(18, 'Mark Twain'),
(19, 'Arthur Conan Doyle'),
(20, 'Virginia Woolf'),
(21, 'Hermann Hesse'),
(22, 'Gabriel Garcia Marquez'),
(23, 'Roald Dahl'),
(24, 'George R.R. Martin'),
(25, 'H.G. Wells'),
(26, 'J.R.R. Tolkien'),
(27, 'Emily Dickinson'),
(28, 'Pablo Neruda'),
(29, 'Maya Angelou'),
(30, 'Toni Morrison'),
(31, 'Franz Kafka'),
(32, 'Leo Tolstoy'),
(33, 'Jane Goodall'),
(34, 'Voltaire'),
(35, 'Ralph Waldo Emerson'),
(36, 'Edgar Allan Poe'),
(37, 'John Steinbeck'),
(38, 'Rudyard Kipling'),
(39, 'Antoine de Saint-Exupéry'),
(40, 'Homer'),
(41, 'Plato'),
(42, 'Socrates'),
(43, 'Aristotle'),
(44, 'C.S. Lewis'),
(45, 'Jules Verne'),
(46, 'Lewis Carroll'),
(47, 'Emily Bronte'),
(48, 'Charlotte Bronte'),
(49, 'Anne Rice'),
(50, 'H.P. Lovecraft'),
(51, 'Aldous Huxley'),
(52, 'Margaret Atwood');

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

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
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`book_id`),
  KEY `Fk_language_books` (`language_code`),
  KEY `Fk_field_books` (`field_name`),
  KEY `Fk_vendor_books` (`vendor_id`),
  KEY `Fk_location_books` (`location_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`book_id`, `title`, `keywords`, `description`, `type`, `quantity`, `location_id`, `language_code`, `vendor_id`, `field_name`, `isbn`, `edition`, `publish_date`, `created_at`, `updated_at`) VALUES
(3, 'Book One', 'Keyword1, Keyword2', 'Description for Book One', 'c', 10, 1, 'en', 1, 'Artificial Intelligence', '17890', 'First Edition', '2022-01-01', '2023-05-07 15:11:22', '2023-05-07 15:11:22'),
(4, 'Book Two', 'Keyword3, Keyword4', 'Description for Book Two', 'c', 20, 2, 'en', 2, 'Artificial Intelligence', '04321', 'Second Edition', '2022-02-01', '2023-05-07 15:11:22', '2023-05-07 15:11:22'),
(5, 'The Great Gatsby', 'Fitzgerald, Jazz Age, Roaring Twenties', 'A story of decadence and excess in the Jazz Age, told through the eyes of narrator Nick Carraway.', 'c', 5, 1, 'en', 1, 'Artificial Intelligence', '93273565', 'First Edition', '1925-04-10', '2023-05-07 15:11:22', '2023-05-07 15:11:22'),
(6, 'To Kill a Mockingbird', 'Harper Lee, Southern Gothic, Civil Rights Movement', 'A novel set in the Deep South during the 1930s, dealing with the themes of racism and injustice.', 'c', 10, 2, 'en', 2, 'Artificial Intelligence', '91120084', 'First Edition', '1960-07-11', '2023-05-07 15:11:22', '2023-05-07 15:11:22'),
(7, '1984', 'George Orwell, dystopia, totalitarianism', 'A dystopian novel set in a totalitarian society, where individualism and independent thinking are forbidden.', 'c', 8, 3, 'en', 3, 'Artificial Intelligence', '91524935', 'First Edition', '1949-06-08', '2023-05-07 15:11:22', '2023-05-07 15:11:22'),
(9, 'Book One', 'Keyword1, Keyword2', 'Description for Book One', 'c', 10, 1, 'en', 1, 'Artificial Intelligence', '17890', 'First Edition', '2022-01-01', '2023-05-07 15:11:42', '2023-05-07 15:11:42'),
(10, 'Book Two', 'Keyword3, Keyword4', 'Description for Book Two', 'c', 20, 2, 'en', 2, 'Artificial Intelligence', '04321', 'Second Edition', '2022-02-01', '2023-05-07 15:11:42', '2023-05-07 15:11:42'),
(11, 'The Great Gatsby', 'Fitzgerald, Jazz Age, Roaring Twenties', 'A story of decadence and excess in the Jazz Age, told through the eyes of narrator Nick Carraway.', 'c', 5, 1, 'en', 1, 'Artificial Intelligence', '93273565', 'First Edition', '1925-04-10', '2023-05-07 15:11:42', '2023-05-07 15:11:42'),
(12, 'To Kill a Mockingbird', 'Harper Lee, Southern Gothic, Civil Rights Movement', 'A novel set in the Deep South during the 1930s, dealing with the themes of racism and injustice.', 'c', 10, 2, 'en', 2, 'Artificial Intelligence', '91120084', 'First Edition', '1960-07-11', '2023-05-07 15:11:42', '2023-05-07 15:11:42'),
(13, '1984', 'George Orwell, dystopia, totalitarianism', 'A dystopian novel set in a totalitarian society, where individualism and independent thinking are forbidden.', 'c', 8, 3, 'en', 3, 'Artificial Intelligence', '91524935', 'First Edition', '1949-06-08', '2023-05-07 15:11:42', '2023-05-07 15:11:42'),
(14, 'Pride and Prejudice', 'Jane Austen, Regency Era, social class', 'A classic novel of manners, romance, and social commentary set in early 19th century England.', 'c', 6, 1, 'en', 4, 'Artificial Intelligence', '91439518', 'First Edition', '1813-01-28', '2023-05-07 15:11:42', '2023-05-07 15:11:42'),
(15, 'The Hitchhiker\'s Guide to the Galaxy', 'Douglas Adams, science fiction, comedy', 'A comedic science fiction series following the misadventures of an unwitting human and his alien friend as they travel through space.', 'c', 12, 2, 'en', 5, 'Artificial Intelligence', '95391803', 'First Edition', '1979-10-12', '2023-05-07 15:11:42', '2023-05-07 15:11:42');

-- --------------------------------------------------------

--
-- Table structure for table `copy`
--

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

CREATE TABLE IF NOT EXISTS `field` (
  `field_name` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `field_keywords` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  PRIMARY KEY (`field_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `field`
--

INSERT INTO `field` (`field_name`, `field_keywords`) VALUES
('Art', 'painting, sculpture, photography, ceramics, printmaking, digital art, installation art'),
('Artificial Intelligence', 'AI, machine learning, neural networks, robotics'),
('Biology', 'genetics, ecology, microbiology, physiology'),
('Business Administration', 'strategic management, organizational behavior, entrepreneurship, operations management, human resource management'),
('Chemistry', 'organic chemistry, inorganic chemistry, analytical chemistry, physical chemistry, biochemistry'),
('Civil Engineering', 'structural engineering, transportation engineering, environmental engineering, geotechnical engineering, construction management'),
('Communications', 'mass communication, media studies, journalism, public relations, digital media'),
('Computer Science', 'programming, algorithms, data structures, software engineering'),
('Data Science', 'Data Analysis, Machine Learning, Statistics, Big Data'),
('Education', 'educational psychology, curriculum development, educational technology, special education, early childhood education'),
('Engineering', 'Mechanical, Electrical, Civil, Aerospace'),
('Environmental Science', 'climate change, sustainability, environmental policy, ecology, conservation biology'),
('Finance', 'investment banking, financial planning, risk management, corporate finance, financial markets, personal finance'),
('Health Sciences', 'anatomy, physiology, pharmacology, epidemiology, public health, medical ethics'),
('Healthcare', 'Medicine, Nursing, Patient Care, Health Administration'),
('History', 'ancient history, medieval history, modern history, world history, cultural history, political history'),
('Hospitality', 'Travel, Tourism, Hotel Management, Restaurant Operations'),
('Law', 'Litigation, Corporate Law, Intellectual Property, Criminal Law'),
('Literature', 'novels, poetry, drama, fiction, non-fiction, literary criticism, creative writing'),
('Marketing', 'market research, branding, digital marketing, consumer behavior, advertising, public relations'),
('Mathematics', 'calculus, linear algebra, statistics, probability'),
('Physics', 'mechanics, electromagnetism, quantum mechanics, thermodynamics'),
('Political Science', 'international relations, comparative politics, political theory, public administration, political economy'),
('Psychology', 'cognitive psychology, behavioral psychology, psychotherapy, social psychology, developmental psychology'),
('Sociology', 'social theory, social research methods, cultural sociology, criminology, gender studies'),
('Software Development', 'Programming, Coding, Debugging, Testing');

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

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

CREATE TABLE IF NOT EXISTS `language` (
  `language_code` varchar(35) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `language` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`language_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `language`
--

INSERT INTO `language` (`language_code`, `language`) VALUES
('ar', 'Arabic'),
('bn', 'Bengali'),
('cs', 'Czech'),
('da', 'Danish'),
('de', 'German'),
('el', 'Greek'),
('en', 'English'),
('es', 'Spanish'),
('fa', 'Persian'),
('fi', 'Finnish'),
('fr', 'French'),
('gu', 'Gujarati'),
('he', 'Hebrew'),
('hi', 'Hindi'),
('hu', 'Hungarian'),
('id', 'Indonesian'),
('it', 'Italian'),
('ja', 'Japanese'),
('kn', 'Kannada'),
('ko', 'Korean'),
('ml', 'Malayalam'),
('ms', 'Malay'),
('nl', 'Dutch'),
('no', 'Norwegian'),
('pl', 'Polish'),
('pt', 'Portuguese'),
('ro', 'Romanian'),
('ru', 'Russian'),
('sv', 'Swedish'),
('sw', 'Swahili'),
('ta', 'Tamil'),
('te', 'Telugu'),
('th', 'Thai'),
('tr', 'Turkish'),
('uk', 'Ukrainian'),
('ur', 'Urdu'),
('vi', 'Vietnamese'),
('zh', 'Chinese');

-- --------------------------------------------------------

--
-- Table structure for table `librarian`
--

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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `librarian`
--

INSERT INTO `librarian` (`email`, `full_name`, `password`, `library_id`, `id`, `remember_token`, `created_at`, `updated_at`) VALUES
('raid.ouahioune@ensia.edu.dz', 'Raid Abderrezak Ouahioune', '$2y$10$GqvjgD5jnqdfwu.HoEeWDOf4itBq0ZZdmODgEk3v7v77tDAdeNHaS', 1, 2, NULL, '2023-05-06 15:13:18', '2023-05-06 15:13:18'),
('raidrockstar040@gmail.com', 'Raid Abderrezak Ouahioune', '$2y$10$ztSfz6Gne3MUf7qDzZvo9O0PeST8IeXNX8TV90HVAMRLzlgP.MW0y', 1, 3, NULL, '2023-05-06 16:23:16', '2023-05-06 16:23:16'),
('sqssqsq@sq.com', 'Raid Abderrezak Ouahioune', '$2y$10$POheeiAlKuVeuKQ6JHPxb.c5IYiS2MnFYuE.g6mmxbBKeYzCICxB6', 1, 4, NULL, '2023-05-07 09:53:57', '2023-05-07 09:53:57'),
('yazid@gmailcom', 'Raid Abderrezak Ouahioune', '$2y$10$KN/iKxQlRxs8BLZpiKABkeRKaK/sfQcriMAuXBGGtEoVNwjpea30m', 1, 5, NULL, '2023-05-07 10:08:55', '2023-05-07 10:08:55'),
('raid.ouahioune@ensia.edu.dz1', 'Ds Ouahioune', '$2y$10$c6IV.wzs2/z2rQSiDaG2GOrUcqhUnjB.H92LfW286YB3MKYDbKvv6', 1, 6, NULL, '2023-05-07 13:41:49', '2023-05-07 13:41:49');

-- --------------------------------------------------------

--
-- Table structure for table `library`
--

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

CREATE TABLE IF NOT EXISTS `location` (
  `location_id` int NOT NULL AUTO_INCREMENT,
  `aisle` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `shelf` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `type` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`location_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`location_id`, `aisle`, `shelf`, `type`) VALUES
(1, 'A', '1', 'book'),
(2, 'B', '2', 'magazine'),
(3, 'C', '3', 'newspaper'),
(4, 'D', '4', 'reference'),
(5, 'E', '5', 'audio');

-- --------------------------------------------------------

--
-- Table structure for table `lost_books`
--

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
-- Table structure for table `migrations`
--

CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2023_05_07_152829_add_timestamps_to_books_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `old_renewals`
--

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
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
(35, 'App\\Models\\librarian', 2, 'main', '7cb6359fb823b67ae74aa38551f2256bb7920aa6901ffb987b4df46b194dc026', '[\"*\"]', NULL, NULL, '2023-05-06 22:40:34', '2023-05-06 22:40:34'),
(38, 'App\\Models\\librarian', 6, 'main', '630517b2b8a9bf27846376f05d97691a9e668b52f658716bb7a943ddd06300e7', '[\"*\"]', NULL, NULL, '2023-05-07 13:41:49', '2023-05-07 13:41:49'),
(42, 'App\\Models\\librarian', 2, 'main', '145bb8c87b8e453865ed9d89324f309ebbcb62f5450f204b0e58092ede72a279', '[\"*\"]', '2023-05-08 13:53:12', NULL, '2023-05-08 13:47:19', '2023-05-08 13:53:12');

-- --------------------------------------------------------

--
-- Table structure for table `published`
--

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
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vendor`
--

CREATE TABLE IF NOT EXISTS `vendor` (
  `vendor_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(320) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `phone_number` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `address` varchar(160) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `type` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`vendor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vendor`
--

INSERT INTO `vendor` (`vendor_id`, `name`, `email`, `phone_number`, `address`, `type`) VALUES
(1, 'ABC Books', 'abcbooks@example.com', '123-456-7890', '123 Main St, Anytown, USA', 'bookstore'),
(2, 'XYZ Publishers', 'info@xyzpublishers.com', '555-555-5555', '456 Oak St, Anycity, USA', 'publisher'),
(3, 'Bookworms Unlimited', 'sales@bookwormsunlimited.com', '555-123-4567', '789 Maple Ave, Anywhere, USA', 'bookstore'),
(4, 'ABC Books', 'abcbooks@example.com', '123-456-7890', '123 Main St, Anytown, USA', 'bookstore'),
(5, 'XYZ Publishers', 'info@xyzpublishers.com', '555-555-5555', '456 Oak St, Anycity, USA', 'publisher'),
(6, 'Bookworms Unlimited', 'sales@bookwormsunlimited.com', '555-123-4567', '789 Maple Ave, Anywhere, USA', 'bookstore');

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
