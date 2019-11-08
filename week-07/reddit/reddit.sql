-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: reddit
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `reddit_posts`
--

DROP TABLE IF EXISTS `reddit_posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reddit_posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `title` varchar(255) NOT NULL DEFAULT '',
  `url` varchar(100) NOT NULL DEFAULT '',
  `score` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reddit_posts`
--

LOCK TABLES `reddit_posts` WRITE;
/*!40000 ALTER TABLE `reddit_posts` DISABLE KEYS */;
INSERT INTO `reddit_posts` VALUES (1,'2019-11-07 20:04:36','dawda','gawsdw',11),(2,'2019-11-07 20:14:30','Crockford','localhost:8080/posts/Crockford',-20),(3,'2019-11-07 20:15:34','Crockford','localhost:8080/posts/Crockford',0),(4,'2019-11-07 20:15:49','Crockford','localhost:8080/posts/Crockford',2),(5,'2019-11-07 20:16:29','Crockford','localhost:8080/posts/Crockford',3),(6,'2019-11-07 20:18:38','Crockford','localhost:8080/posts/Crockford',0),(7,'2019-11-08 09:18:48','undefined','localhost:8080/posts/undefined',0),(8,'2019-11-08 09:28:20','undefined','localhost:8080/posts/undefined',0),(9,'2019-11-08 09:32:26','undefined','localhost:8080/posts/undefined',0),(10,'2019-11-08 09:32:42','undefined','localhost:8080/posts/undefined',0),(11,'2019-11-08 09:33:38','undefined','localhost:8080/posts/undefined',0),(12,'2019-11-08 09:34:46','undefined','localhost:8080/posts/undefined',0),(13,'2019-11-08 09:39:52','undefined','undefined',0),(14,'2019-11-08 09:40:46','undefined','undefined',0),(15,'2019-11-08 09:41:03','undefined','undefined',0),(16,'2019-11-08 09:41:37','undefined','undefined',0),(17,'2019-11-08 09:41:41','undefined','undefined',0),(18,'2019-11-08 09:41:43','undefined','undefined',0),(19,'2019-11-08 09:41:54','undefined','undefined',0),(20,'2019-11-08 09:42:06','undefined','undefined',0),(21,'2019-11-08 09:43:26','undefined','undefined',0),(22,'2019-11-08 09:44:25','undefined','undefined',0),(23,'2019-11-08 09:44:44','undefined','undefined',0),(24,'2019-11-08 09:46:25','undefined','undefined',0),(25,'2019-11-08 09:46:56','undefined','undefined',0),(26,'2019-11-08 09:47:53','undefined','undefined',0),(27,'2019-11-08 09:48:06','undefined','undefined',0),(28,'2019-11-08 09:51:09','undefined','localhost:8080/posts/undefined',0),(29,'2019-11-08 09:51:15','undefined','localhost:8080/posts/undefined',0),(30,'2019-11-08 09:53:26','undefined','undefined',0),(31,'2019-11-08 09:56:22','undefined','undefined',0),(32,'2019-11-08 09:57:11','undefined','undefined',0),(33,'2019-11-08 09:57:31','valami','dik',0),(34,'2019-11-08 09:57:41','valami','dik',0),(35,'2019-11-08 09:57:59','ezmost','komoly',0),(36,'2019-11-08 10:19:41','remek','kek',0);
/*!40000 ALTER TABLE `reddit_posts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-08 14:07:59
