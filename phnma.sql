CREATE DATABASE  IF NOT EXISTS `phinma` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `phinma`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: phinma
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tbl_accounts`
--

DROP TABLE IF EXISTS `tbl_accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_accounts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `phn_username` varchar(45) DEFAULT NULL,
  `phn_pass` varchar(100) DEFAULT NULL,
  `phn_role` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_accounts`
--

LOCK TABLES `tbl_accounts` WRITE;
/*!40000 ALTER TABLE `tbl_accounts` DISABLE KEYS */;
INSERT INTO `tbl_accounts` VALUES (1,'rolandCap','$2a$10$YlbDgLtIQy0cDmFGb/QNSexpZoy6uP.GB2dsf4.kAdNoEWKWoe5Ky','admin'),(2,'rolandRegists','$2a$10$YlbDgLtIQy0cDmFGb/QNSexpZoy6uP.GB2dsf4.kAdNoEWKWoe5Ky','registrar');
/*!40000 ALTER TABLE `tbl_accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_announcement`
--

DROP TABLE IF EXISTS `tbl_announcement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_announcement` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ann_createdby` varchar(255) DEFAULT NULL,
  `ann_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `ann_title` varchar(255) DEFAULT NULL,
  `ann_body` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_announcement`
--

LOCK TABLES `tbl_announcement` WRITE;
/*!40000 ALTER TABLE `tbl_announcement` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_announcement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_declinedreq`
--

DROP TABLE IF EXISTS `tbl_declinedreq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_declinedreq` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dec_declineby_id` varchar(255) DEFAULT NULL,
  `dec_declineby_name` varchar(255) DEFAULT NULL,
  `dec_declineby_role` varchar(255) DEFAULT NULL,
  `dec_fname` varchar(255) DEFAULT NULL,
  `dec_mname` varchar(255) DEFAULT NULL,
  `dec_lname` varchar(255) DEFAULT NULL,
  `dec_reqtype` varchar(255) DEFAULT NULL,
  `dec_reqcode` varchar(255) DEFAULT NULL,
  `dec_dateofreq` timestamp NULL DEFAULT NULL,
  `dec_reason` varchar(255) DEFAULT NULL,
  `dec_timeofrejection` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_declinedreq`
--

LOCK TABLES `tbl_declinedreq` WRITE;
/*!40000 ALTER TABLE `tbl_declinedreq` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_declinedreq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_donereq`
--

DROP TABLE IF EXISTS `tbl_donereq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_donereq` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dr_assignby_id` varchar(255) DEFAULT NULL,
  `dr_assignby_name` varchar(255) DEFAULT NULL,
  `dr_reqid` varchar(255) DEFAULT NULL,
  `dr_fname` varchar(255) DEFAULT NULL,
  `dr_mname` varchar(255) DEFAULT NULL,
  `dr_lname` varchar(255) DEFAULT NULL,
  `dr_email` varchar(255) DEFAULT NULL,
  `dr_course` varchar(255) DEFAULT NULL,
  `dr_department` varchar(255) DEFAULT NULL,
  `dr_phonenum` varchar(255) DEFAULT NULL,
  `dr_birthday` varchar(45) DEFAULT NULL,
  `dr_address` varchar(45) DEFAULT NULL,
  `dr_yearlvl` varchar(45) DEFAULT NULL,
  `dr_undergrad` varchar(45) DEFAULT NULL,
  `dr_company` varchar(45) DEFAULT NULL,
  `dr_position` varchar(45) DEFAULT NULL,
  `dr_reqtype` varchar(45) DEFAULT NULL,
  `dr_copy` varchar(45) DEFAULT NULL,
  `dr_done` varchar(255) DEFAULT NULL,
  `dr_requestorname` varchar(255) DEFAULT NULL,
  `dr_code` varchar(45) DEFAULT NULL,
  `dr_proofofpay` varchar(255) DEFAULT NULL,
  `dr_file` varchar(255) DEFAULT NULL,
  `dr_dateofdone` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_donereq`
--

LOCK TABLES `tbl_donereq` WRITE;
/*!40000 ALTER TABLE `tbl_donereq` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_donereq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_newreq`
--

DROP TABLE IF EXISTS `tbl_newreq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_newreq` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nr_fname` varchar(255) DEFAULT NULL,
  `nr_mname` varchar(255) DEFAULT NULL,
  `nr_lname` varchar(255) DEFAULT NULL,
  `nr_email` varchar(45) DEFAULT NULL,
  `nr_course` varchar(45) DEFAULT NULL,
  `nr_department` varchar(45) DEFAULT NULL,
  `nr_phone` varchar(45) DEFAULT NULL,
  `nr_address` varchar(45) DEFAULT NULL,
  `nr_yearlvl` varchar(45) DEFAULT NULL,
  `nr_undergrad` varchar(45) DEFAULT NULL,
  `nr_company` varchar(45) DEFAULT NULL,
  `nr_position` varchar(45) DEFAULT NULL,
  `nr_price` varchar(45) DEFAULT NULL,
  `nr_schoolid` varchar(45) DEFAULT NULL,
  `nr_assign` varchar(45) DEFAULT NULL,
  `nr_approve` varchar(45) DEFAULT NULL,
  `nr_form` json DEFAULT NULL,
  `nr_copy` varchar(45) DEFAULT NULL,
  `nr_firstreq` varchar(45) DEFAULT NULL,
  `nr_proofofpay` varchar(255) DEFAULT NULL,
  `nr_file` varchar(255) DEFAULT NULL,
  `nr_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nr_email_UNIQUE` (`nr_email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_newreq`
--

LOCK TABLES `tbl_newreq` WRITE;
/*!40000 ALTER TABLE `tbl_newreq` DISABLE KEYS */;
INSERT INTO `tbl_newreq` VALUES (1,'Roland','Antonio','Capinpin','capinpinroland25@gmail','Bachelor of Science in Tourism Management','CAHS','00099922','Santa.Barbara,Victoria','3rd Year','test','test','test','2850',NULL,NULL,NULL,'[{\"copyNumber\": \"2\", \"requestName\": \"Subject Description\", \"selectedValue\": \"150\", \"statusRequest\": \"yes\"}, {\"copyNumber\": \"3\", \"requestName\": \"TOR For Copy School\", \"selectedValue\": \"350\", \"statusRequest\": \"yes\"}, {\"copyNumber\": \"3\", \"requestName\": \"HD\", \"selectedValue\": \"500\", \"statusRequest\": \"no\"}]',NULL,NULL,NULL,NULL,'2023-04-04 04:40:15'),(2,'test1','tester1','test12','teste12@gmail','Bachelor of Science in Entrepreneurship','CITE','3123323','santest.tester','2nd Year','test','test','e2312','2000',NULL,NULL,NULL,'[{\"copyNumber\": \"2\", \"requestName\": \"TOR For Reference\", \"selectedValue\": \"350\", \"statusRequest\": \"yes\"}, {\"copyNumber\": \"2\", \"requestName\": \"TOR For Board Exam\", \"selectedValue\": \"350\", \"statusRequest\": \"yes\"}, {\"copyNumber\": 1, \"requestName\": \"CAV\", \"selectedValue\": \"600\", \"statusRequest\": \"no\"}]',NULL,NULL,NULL,NULL,'2023-04-04 04:44:34');
/*!40000 ALTER TABLE `tbl_newreq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_request`
--

DROP TABLE IF EXISTS `tbl_request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_request` (
  `id` int NOT NULL AUTO_INCREMENT,
  `r_fname` varchar(255) DEFAULT NULL,
  `r_mname` varchar(255) DEFAULT NULL,
  `r_lname` varchar(255) DEFAULT NULL,
  `r_email` varchar(45) DEFAULT NULL,
  `r_course` varchar(45) DEFAULT NULL,
  `r_department` varchar(255) DEFAULT NULL,
  `r_phone` varchar(45) DEFAULT NULL,
  `r_birthday` varchar(45) DEFAULT NULL,
  `r_address` varchar(45) DEFAULT NULL,
  `r_yearlvl` varchar(45) DEFAULT NULL,
  `r_assignid` int DEFAULT NULL,
  `r_assignname` varchar(45) DEFAULT NULL,
  `r_approveby` varchar(45) DEFAULT NULL,
  `r_approveid` int DEFAULT NULL,
  `r_reqtype` varchar(45) DEFAULT NULL,
  `r_copy` varchar(45) DEFAULT NULL,
  `r_frequest` varchar(45) DEFAULT NULL,
  `r_proopay` varchar(45) DEFAULT NULL,
  `r_file` varchar(45) DEFAULT NULL,
  `r_dateofapproval` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `r_email_UNIQUE` (`r_email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_request`
--

LOCK TABLES `tbl_request` WRITE;
/*!40000 ALTER TABLE `tbl_request` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_request` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-04 13:07:02
