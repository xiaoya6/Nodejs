/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50621
Source Host           : localhost:3306
Source Database       : node_test

Target Server Type    : MYSQL
Target Server Version : 50621
File Encoding         : 65001

Date: 2018-07-17 15:16:21
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for design_week_customer_info
-- ----------------------------
DROP TABLE IF EXISTS `design_week_customer_info`;
CREATE TABLE `design_week_customer_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'customer id',
  `words` varchar(255) DEFAULT NULL COMMENT 'the words recieve from h5 client',
  `is_finished` int(1) DEFAULT '0' COMMENT 'finished flag',
  `update_datetime` datetime DEFAULT NULL COMMENT 'last update time',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
