-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 04, 2023 at 06:12 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tali3`
--

-- --------------------------------------------------------

--
-- Table structure for table `author`
--

CREATE TABLE `author` (
  `author_id` int(11) NOT NULL,
  `author_name` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `book_id` int(11) NOT NULL,
  `isbn` varchar(13) DEFAULT NULL,
  `edition` varchar(120) DEFAULT NULL,
  `publish_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `copy`
--

CREATE TABLE `copy` (
  `item_id` int(11) NOT NULL,
  `copy_number` int(6) NOT NULL,
  `reception_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `current_loan`
--

CREATE TABLE `current_loan` (
  `loan_id` int(11) NOT NULL,
  `due_date` datetime NOT NULL,
  `renewal_count` int(5) NOT NULL DEFAULT 0,
  `loan_date` datetime NOT NULL,
  `librarian_email` varchar(120) NOT NULL,
  `patron_email` varchar(120) NOT NULL,
  `item_id` int(11) NOT NULL,
  `copy_number` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `field`
--

CREATE TABLE `field` (
  `field_name` varchar(120) NOT NULL,
  `field_keywords` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `loan_id` int(11) NOT NULL,
  `librarian_email` varchar(120) NOT NULL,
  `item_id` int(11) NOT NULL,
  `patron_email` varchar(120) NOT NULL,
  `copy_number` int(6) NOT NULL,
  `loan_date` datetime NOT NULL,
  `due_date` datetime NOT NULL,
  `return_date` datetime NOT NULL,
  `renewal_count` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `item`
--

CREATE TABLE `item` (
  `item_id` int(11) NOT NULL,
  `title` varchar(480) NOT NULL,
  `keywords` text DEFAULT NULL,
  `description` tinytext NOT NULL,
  `type` char(1) NOT NULL,
  `quantity` int(6) NOT NULL,
  `location_id` int(11) NOT NULL,
  `language_code` varchar(35) NOT NULL,
  `vendor_id` int(11) NOT NULL,
  `field_name` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `language`
--

CREATE TABLE `language` (
  `language_code` varchar(35) NOT NULL,
  `language` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `librarian`
--

CREATE TABLE `librarian` (
  `librarian_email` varchar(120) NOT NULL,
  `full_name` varchar(120) NOT NULL,
  `password` varchar(64) NOT NULL,
  `library_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `library`
--

CREATE TABLE `library` (
  `library_id` int(11) NOT NULL,
  `name` varchar(120) NOT NULL,
  `department` varchar(120) DEFAULT NULL,
  `university_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `location_id` int(11) NOT NULL,
  `aisle` varchar(8) DEFAULT NULL,
  `shelf` varchar(8) DEFAULT NULL,
  `type` varchar(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `lost_items`
--

CREATE TABLE `lost_items` (
  `copy_number` int(6) NOT NULL,
  `reception_date` datetime NOT NULL,
  `lost_date` datetime NOT NULL,
  `reason` text NOT NULL,
  `librarian_email` varchar(120) NOT NULL,
  `item_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `old_renewals`
--

CREATE TABLE `old_renewals` (
  `history_loan_id` int(11) NOT NULL,
  `renewal_date` datetime NOT NULL,
  `old_due_date` datetime NOT NULL,
  `due_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `patron`
--

CREATE TABLE `patron` (
  `patron_email` varchar(120) NOT NULL,
  `first_name` varchar(60) NOT NULL,
  `last_name` varchar(60) NOT NULL,
  `type` char(1) NOT NULL,
  `university_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `published`
--

CREATE TABLE `published` (
  `author_id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `renewals`
--

CREATE TABLE `renewals` (
  `loan_id` int(11) NOT NULL,
  `renewal_date` datetime NOT NULL,
  `old_due_date` datetime NOT NULL,
  `due_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `research_paper`
--

CREATE TABLE `research_paper` (
  `paper_id` int(11) NOT NULL,
  `publish_date` date DEFAULT NULL,
  `doi` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `university`
--

CREATE TABLE `university` (
  `university_id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `email` varchar(120) NOT NULL,
  `address` varchar(160) NOT NULL,
  `phone_number` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vendor`
--

CREATE TABLE `vendor` (
  `vendor_id` int(11) NOT NULL,
  `name` varchar(320) NOT NULL,
  `email` varchar(120) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `address` varchar(160) DEFAULT NULL,
  `type` varchar(120) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `author`
--
ALTER TABLE `author`
  ADD PRIMARY KEY (`author_id`);

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`book_id`);

--
-- Indexes for table `copy`
--
ALTER TABLE `copy`
  ADD PRIMARY KEY (`item_id`,`copy_number`),
  ADD KEY `copy_number_idx` (`copy_number`);

--
-- Indexes for table `current_loan`
--
ALTER TABLE `current_loan`
  ADD PRIMARY KEY (`loan_id`),
  ADD KEY `Fk_patron_current_loan` (`patron_email`),
  ADD KEY `Fk_librarian_current_loan` (`librarian_email`),
  ADD KEY `Fk_item_current_loan` (`item_id`),
  ADD KEY `Fk_copy_current_loan` (`copy_number`);

--
-- Indexes for table `field`
--
ALTER TABLE `field`
  ADD PRIMARY KEY (`field_name`);

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`loan_id`),
  ADD KEY `Fk_librarian_history` (`librarian_email`),
  ADD KEY `Fk_patron_history` (`patron_email`),
  ADD KEY `Fk_item_history` (`item_id`),
  ADD KEY `Fk_copy_history` (`copy_number`);

--
-- Indexes for table `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`item_id`),
  ADD KEY `Fk_language_item` (`language_code`),
  ADD KEY `Fk_field_item` (`field_name`),
  ADD KEY `Fk_vendor_item` (`vendor_id`),
  ADD KEY `Fk_location_item` (`location_id`);

--
-- Indexes for table `language`
--
ALTER TABLE `language`
  ADD PRIMARY KEY (`language_code`);

--
-- Indexes for table `librarian`
--
ALTER TABLE `librarian`
  ADD PRIMARY KEY (`librarian_email`),
  ADD KEY `Fk_library_librarian` (`library_id`);

--
-- Indexes for table `library`
--
ALTER TABLE `library`
  ADD PRIMARY KEY (`library_id`),
  ADD KEY `Fk_university_library` (`university_id`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`location_id`);

--
-- Indexes for table `lost_items`
--
ALTER TABLE `lost_items`
  ADD PRIMARY KEY (`copy_number`,`librarian_email`,`item_id`),
  ADD KEY `Fk_librarian_lost_items` (`librarian_email`);

--
-- Indexes for table `old_renewals`
--
ALTER TABLE `old_renewals`
  ADD PRIMARY KEY (`history_loan_id`,`renewal_date`);

--
-- Indexes for table `patron`
--
ALTER TABLE `patron`
  ADD PRIMARY KEY (`patron_email`),
  ADD KEY `Fk_university_patron` (`university_id`);

--
-- Indexes for table `published`
--
ALTER TABLE `published`
  ADD KEY `Fk_item_published` (`item_id`),
  ADD KEY `Fk_author_published` (`author_id`);

--
-- Indexes for table `renewals`
--
ALTER TABLE `renewals`
  ADD PRIMARY KEY (`loan_id`,`renewal_date`);

--
-- Indexes for table `research_paper`
--
ALTER TABLE `research_paper`
  ADD PRIMARY KEY (`paper_id`);

--
-- Indexes for table `university`
--
ALTER TABLE `university`
  ADD PRIMARY KEY (`university_id`);

--
-- Indexes for table `vendor`
--
ALTER TABLE `vendor`
  ADD PRIMARY KEY (`vendor_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `author`
--
ALTER TABLE `author`
  MODIFY `author_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `current_loan`
--
ALTER TABLE `current_loan`
  MODIFY `loan_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `item`
--
ALTER TABLE `item`
  MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `library`
--
ALTER TABLE `library`
  MODIFY `library_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `location_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `university`
--
ALTER TABLE `university`
  MODIFY `university_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vendor`
--
ALTER TABLE `vendor`
  MODIFY `vendor_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `book`
--
ALTER TABLE `book`
  ADD CONSTRAINT `Fk_item_book` FOREIGN KEY (`book_id`) REFERENCES `item` (`item_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `copy`
--
ALTER TABLE `copy`
  ADD CONSTRAINT `Fk_item_copy` FOREIGN KEY (`item_id`) REFERENCES `item` (`item_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `current_loan`
--
ALTER TABLE `current_loan`
  ADD CONSTRAINT `Fk_copy_current_loan` FOREIGN KEY (`copy_number`) REFERENCES `copy` (`copy_number`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `Fk_item_current_loan` FOREIGN KEY (`item_id`) REFERENCES `item` (`item_id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `Fk_librarian_current_loan` FOREIGN KEY (`librarian_email`) REFERENCES `librarian` (`librarian_email`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `Fk_patron_current_loan` FOREIGN KEY (`patron_email`) REFERENCES `patron` (`patron_email`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `history`
--
ALTER TABLE `history`
  ADD CONSTRAINT `Fk_copy_history` FOREIGN KEY (`copy_number`) REFERENCES `copy` (`copy_number`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `Fk_item_history` FOREIGN KEY (`item_id`) REFERENCES `item` (`item_id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `Fk_librarian_history` FOREIGN KEY (`librarian_email`) REFERENCES `librarian` (`librarian_email`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `Fk_patron_history` FOREIGN KEY (`patron_email`) REFERENCES `patron` (`patron_email`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `item`
--
ALTER TABLE `item`
  ADD CONSTRAINT `Fk_field_item` FOREIGN KEY (`field_name`) REFERENCES `field` (`field_name`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Fk_language_item` FOREIGN KEY (`language_code`) REFERENCES `language` (`language_code`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Fk_location_item` FOREIGN KEY (`location_id`) REFERENCES `location` (`location_id`),
  ADD CONSTRAINT `Fk_vendor_item` FOREIGN KEY (`vendor_id`) REFERENCES `vendor` (`vendor_id`);

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
-- Constraints for table `lost_items`
--
ALTER TABLE `lost_items`
  ADD CONSTRAINT `Fk_librarian_lost_items` FOREIGN KEY (`librarian_email`) REFERENCES `librarian` (`librarian_email`) ON DELETE NO ACTION ON UPDATE CASCADE;

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
  ADD CONSTRAINT `Fk_item_published` FOREIGN KEY (`item_id`) REFERENCES `item` (`item_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `renewals`
--
ALTER TABLE `renewals`
  ADD CONSTRAINT `Fk_current_loan` FOREIGN KEY (`loan_id`) REFERENCES `current_loan` (`loan_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `research_paper`
--
ALTER TABLE `research_paper`
  ADD CONSTRAINT `Fk_item_research_paper` FOREIGN KEY (`paper_id`) REFERENCES `item` (`item_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
