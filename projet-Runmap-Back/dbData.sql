-- Adminer 4.7.1 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `city`;
CREATE TABLE `city` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `postalcode` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `city` (`id`, `name`, `postalcode`, `created_at`) VALUES
(1,	'Paris',	75000,	'2019-10-17 12:03:37'),
(2,	'Lyon',	69000,	'2019-10-17 12:03:57'),
(3,	'Lille',	59000,	'2019-10-17 12:04:16'),
(4,	'Marseille',	13000,	'2019-10-17 12:04:33');

DROP TABLE IF EXISTS `migration_versions`;
CREATE TABLE `migration_versions` (
  `version` varchar(14) COLLATE utf8mb4_unicode_ci NOT NULL,
  `executed_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `migration_versions` (`version`, `executed_at`) VALUES
('20191017100226',	'2019-10-17 10:02:37');

DROP TABLE IF EXISTS `place`;
CREATE TABLE `place` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `city_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `adress` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `schedule` longtext COLLATE utf8mb4_unicode_ci,
  `complement_info` longtext COLLATE utf8mb4_unicode_ci,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `validate` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_741D53CD8BAC62AF` (`city_id`),
  CONSTRAINT `FK_741D53CD8BAC62AF` FOREIGN KEY (`city_id`) REFERENCES `city` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `place` (`id`, `city_id`, `name`, `adress`, `schedule`, `complement_info`, `created_at`, `updated_at`, `validate`) VALUES
(1,	1,	'Stade charlety',	'99 BOULEVARD KELLERMANN',	NULL,	'Type : Découvert\r\nNature du sol : Synthétique (hors gazon)\r\nLongueur de la piste : 400m\r\nLongueur de la ligne droite :133 m\r\nNombre de couloirs de la ligne droite : 8\r\nNombre de couloirs hors ligne droite : 8\r\nNombre d\'aires de saut en hauteur : 2\r\nNombre d\'aire de saut à la perche : 2\r\nNombre d\'aire de lancer de poids : 2\r\nNombre d\'aire de lancer de Javelot : 2',	'2019-10-17 12:09:53',	NULL,	0),
(2,	1,	'Centre sportif leo lagrange ',	'68 BOULEVARD PONIATOWSKI ',	NULL,	'Type : Découvert\r\nNature du sol : Synthétique (hors gazon)\r\nLongueur de la piste : 351m\r\nLongueur de la ligne droite :120 m\r\nNombre de couloirs de la ligne droite : 6\r\nNombre de couloirs hors ligne droite : 4\r\nNombre d\'aires de saut en hauteur : 1\r\nNombre d\'aire de lancer de poids : 2',	'2019-10-17 12:12:05',	NULL,	0),
(3,	2,	'Piste d\'athétisme Collège jean perrin',	'14 rue de lattre de Tassigny',	NULL,	'Type : Découvert\r\nNature du sol : Bitume\r\nLongueur de la piste : 200m\r\nLongueur de la ligne droite :40 m\r\nNombre de couloirs de la ligne droite : 3\r\nNombre de couloirs hors ligne droite : 3',	'2019-10-17 12:14:47',	NULL,	0),
(4,	3,	'Stade Des Ormes',	'rue de Lompret',	NULL,	'Type : Découvert\r\nNature du sol : Synthétique (hors gazon)\r\nLongueur de la piste : 400m\r\nLongueur de la ligne droite :140 m\r\nNombre de couloirs de la ligne droite : 8\r\nNombre de couloirs hors ligne droite : 8\r\nNombre d\'aires de saut en hauteur : 2\r\nNombre d\'airede saut à la perche : 2\r\nNombre d\'aire de lancer de poids : 2\r\nNombre d\'aire de lancer de disque : 1\r\nNombre d\'aire de lancer de Javelot : 2\r\nNombre d\'aire de lancer de marteau : 1',	'2019-10-17 12:18:19',	NULL,	0);

DROP TABLE IF EXISTS `place_sport`;
CREATE TABLE `place_sport` (
  `place_id` int(11) NOT NULL,
  `sport_id` int(11) NOT NULL,
  PRIMARY KEY (`place_id`,`sport_id`),
  KEY `IDX_B3F3F4F1DA6A219` (`place_id`),
  KEY `IDX_B3F3F4F1AC78BCF8` (`sport_id`),
  CONSTRAINT `FK_B3F3F4F1AC78BCF8` FOREIGN KEY (`sport_id`) REFERENCES `sport` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_B3F3F4F1DA6A219` FOREIGN KEY (`place_id`) REFERENCES `place` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `place_sport` (`place_id`, `sport_id`) VALUES
(1,	1),
(2,	1),
(3,	1),
(4,	1);

DROP TABLE IF EXISTS `review`;
CREATE TABLE `review` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `place_id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `commentary` longtext COLLATE utf8mb4_unicode_ci,
  `rate` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_794381C6A76ED395` (`user_id`),
  KEY `IDX_794381C6DA6A219` (`place_id`),
  CONSTRAINT `FK_794381C6A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FK_794381C6DA6A219` FOREIGN KEY (`place_id`) REFERENCES `place` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `review` (`id`, `user_id`, `place_id`, `title`, `commentary`, `rate`) VALUES
(1,	1,	1,	'super stade',	'grosse infrastructure beaucoup de gens',	5),
(2,	2,	2,	'Jolie stade',	'grosse piste d\'athlétisme beaucoup de monde il y a des coach sur place qui hésite pas a nous aidez',	5),
(3,	1,	3,	'Bof',	'Stade mal fréquenter trop de monde',	2),
(4,	2,	4,	'Super!!',	'J\'ai couru toute l\'apres midi c\'etait super',	4);

DROP TABLE IF EXISTS `sport`;
CREATE TABLE `sport` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `sport` (`id`, `name`, `created_at`) VALUES
(1,	'athlétisme',	'2019-10-17 12:19:04');

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` json NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `firstname` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(6) COLLATE utf8mb4_unicode_ci NOT NULL,
  `age` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_8D93D649E7927C74` (`email`),
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `user` (`id`, `email`, `roles`, `password`, `lastname`, `firstname`, `gender`, `age`, `created_at`, `updated_at`) VALUES
(1,	'brice.ouaali@gmail.com',	'null',	'123',	'ouaali',	'brice',	'homme',	24,	'2019-10-17 16:44:25',	NULL),
(2,	'brice.ouaali@mail.com', '[\"ROLE_ADMIN\"]',	'1234',	'ouaali',	'brice',	'homme', 25,	'2019-10-17 17:07:50',	NULL);

-- 2019-10-17 15:24:38