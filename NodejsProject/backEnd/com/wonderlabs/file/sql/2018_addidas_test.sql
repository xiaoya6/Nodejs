/*
Navicat MySQL Data Transfer

Source Server         : CompanyServer
Source Server Version : 50528
Source Host           : 112.124.16.80:3306
Source Database       : 2018_addidas_test

Target Server Type    : MYSQL
Target Server Version : 50528
File Encoding         : 65001

Date: 2018-05-22 17:07:27
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for campaign_record
-- ----------------------------
DROP TABLE IF EXISTS `campaign_record`;
CREATE TABLE `campaign_record` (
  `union_id` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `campaign` varchar(255) DEFAULT NULL,
  `lvl` int(1) DEFAULT NULL,
  `play_datetime` datetime DEFAULT NULL,
  `media_path` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of campaign_record
-- ----------------------------

INSERT INTO `campaign_record` VALUES ('spiderMan', null, '上海市', '训练', '1', '2018-05-22 16:00:07', '');
INSERT INTO `campaign_record` VALUES ('botter', null, '上海市', '训练', '1', '2018-05-22 16:00:07', '');
INSERT INTO `campaign_record` VALUES ('guanyu', null, '上海市', '篮球', '0', '2018-05-22 16:04:08', '');
INSERT INTO `campaign_record` VALUES ('hebe', null, '上海市', '足球', '1', '2018-05-22 16:13:29', 'http://wlstg.blob.core.chinacloudapi.cn/adidasrosfootballhebe_20181322041333');
INSERT INTO `campaign_record` VALUES ('hebe', null, '上海市', '足球', '1', '2018-05-22 16:14:13', 'http://wlstg.blob.core.chinacloudapi.cn/adidasrosfootballhebe_20181322041343');
INSERT INTO `campaign_record` VALUES ('hebe', null, '上海市', '足球', '1', '2018-05-22 16:16:10', 'http://wlstg.blob.core.chinacloudapi.cn/adidasrosfootballhebe_20181622041610');
INSERT INTO `campaign_record` VALUES ('hebe', null, '上海市', '足球', '1', '2018-05-22 16:18:34', 'http://wlstg.blob.core.chinacloudapi.cn/adidasrosfootball/hebe_20181822041835.jpg');
INSERT INTO `campaign_record` VALUES ('guanyu', null, '上海市', '篮球', '0', '2018-05-22 16:20:02', 'https://wlstg.blob.core.chinacloudapi.cn/adidasrosbasketball/����.mp4');
INSERT INTO `campaign_record` VALUES ('spiderMan', null, '上海市', '训练', '1', '2018-05-22 16:20:11', '');
INSERT INTO `campaign_record` VALUES ('botter', null, '上海市', '训练', '1', '2018-05-22 16:20:11', '');
INSERT INTO `campaign_record` VALUES ('zeo', null, '上海市', '篮球', '0', '2018-05-22 16:25:28', 'https://wlstg.blob.core.chinacloudapi.cn/adidasrosbasketball/zeo5/22/2018 4:24:51 PM.mp4');
INSERT INTO `campaign_record` VALUES ('zeo', null, '上海市', '篮球', '0', '2018-05-22 16:27:51', 'https://wlstg.blob.core.chinacloudapi.cn/adidasrosbasketball/zeo_YYYY05DD042733.mp4');
INSERT INTO `campaign_record` VALUES ('hebe', null, '上海市', '足球', '1', '2018-05-22 16:33:04', 'http://wlstg.blob.core.chinacloudapi.cn/adidasrosfootball/hebe_20183322043305.jpg');
INSERT INTO `campaign_record` VALUES ('hebe', null, '上海市', '足球', '2', '2018-05-22 16:33:39', 'http://wlstg.blob.core.chinacloudapi.cn/adidasrosfootball/hebe_20183322043325.jpg');
INSERT INTO `campaign_record` VALUES ('hebe', null, '上海市', '足球', '3', '2018-05-22 16:34:33', 'http://wlstg.blob.core.chinacloudapi.cn/adidasrosfootball/hebe_20183422043436.jpg');
INSERT INTO `campaign_record` VALUES ('hebe', null, '上海市', '足球', '1', '2018-05-22 16:37:03', 'https://wlstg.blob.core.chinacloudapi.cn/adidasrosfootball/hebe_20183622043653.jpg');
INSERT INTO `campaign_record` VALUES ('hebe', null, '上海市', '足球', '1', '2018-05-22 16:38:15', 'https://wlstg.blob.core.chinacloudapi.cn/adidasrosfootball/hebe_20183822043815.jpg');
INSERT INTO `campaign_record` VALUES ('hebe', null, '上海市', '足球', '2', '2018-05-22 16:38:43', 'https://wlstg.blob.core.chinacloudapi.cn/adidasrosfootball/hebe_20183822043825.jpg');
INSERT INTO `campaign_record` VALUES ('hebe', null, '上海市', '足球', '1', '2018-05-22 16:39:51', 'https://wlstg.blob.core.chinacloudapi.cn/adidasrosfootball/hebe_20183922043952.jpg');
INSERT INTO `campaign_record` VALUES ('hebe', null, '上海市', '足球', '2', '2018-05-22 16:40:37', 'https://wlstg.blob.core.chinacloudapi.cn/adidasrosfootball/hebe_20184022044039.jpg');
INSERT INTO `campaign_record` VALUES ('hebe', null, '上海市', '足球', '1', '2018-05-22 16:42:31', 'https://wlstg.blob.core.chinacloudapi.cn/adidasrosfootball/hebe_20180522044234.jpg');
INSERT INTO `campaign_record` VALUES ('zeo', null, '上海市', '篮球', '0', '2018-05-22 16:43:32', 'https://wlstg.blob.core.chinacloudapi.cn/adidasrosbasketball/zeo_20180522044303.mp4');
INSERT INTO `campaign_record` VALUES ('hebe', null, '上海市', '足球', '1', '2018-05-22 16:46:25', 'https://wlstg.blob.core.chinacloudapi.cn/adidasrosfootball/hebe_20180522044628.jpg');
INSERT INTO `campaign_record` VALUES ('hebe', null, '上海市', '足球', '2', '2018-05-22 16:48:39', 'https://wlstg.blob.core.chinacloudapi.cn/adidasrosfootball/hebe_20180522044842.jpg');
INSERT INTO `campaign_record` VALUES ('hebe', null, '上海市', '足球', '3', '2018-05-22 16:49:57', 'https://wlstg.blob.core.chinacloudapi.cn/adidasrosfootball/hebe_20180522044959.jpg');
INSERT INTO `campaign_record` VALUES ('zeo', null, '上海市', '篮球', '0', '2018-05-22 16:50:27', '');
INSERT INTO `campaign_record` VALUES ('harden', null, '上海市', '篮球', '0', '2018-05-22 16:56:34', 'https://wlstg.blob.core.chinacloudapi.cn/adidasrosbasketball/harden_20180522045447.mp4');
INSERT INTO `campaign_record` VALUES ('harden', null, '上海市', '篮球', '0', '2018-05-22 16:59:50', 'https://wlstg.blob.core.chinacloudapi.cn/adidasrosbasketball/harden_20180522045900.mp4');
INSERT INTO `campaign_record` VALUES ('tiger', null, '上海市', '篮球', '1', '2018-05-22 17:01:06', '');

-- ----------------------------
-- Table structure for equip_info
-- ----------------------------
DROP TABLE IF EXISTS `equip_info`;
CREATE TABLE `equip_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `equip_name` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `campaign` varchar(255) DEFAULT NULL,
  `is_using` int(1) DEFAULT '0',
  `player_union_id` varchar(255) DEFAULT NULL,
  `player_name` varchar(255) DEFAULT NULL,
  `update_datetime` datetime DEFAULT NULL,
  `is_closed` int(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of equip_info
-- ----------------------------
INSERT INTO `equip_info` VALUES ('1', 'shanghai_basketball', '上海市', '篮球', '0', null, null, '2018-05-22 17:01:06', '0');
INSERT INTO `equip_info` VALUES ('2', 'shanghai_football', '上海市', '足球', '0', null, null, '2018-05-22 16:49:57', '0');
INSERT INTO `equip_info` VALUES ('3', 'shanghai_training1', '上海市', '训练', '0', null, null, '2018-05-22 16:20:11', '0');
INSERT INTO `equip_info` VALUES ('4', 'shanghai_training2', '上海市', '训练', '0', null, null, '2018-05-22 16:20:11', '0');
INSERT INTO `equip_info` VALUES ('5', 'shanghai_training3', '上海市', '训练', '0', null, null, '2018-05-22 15:23:17', '0');
INSERT INTO `equip_info` VALUES ('6', 'shanghai_training4', '上海市', '训练', '0', null, null, '2018-05-22 15:25:27', '0');
INSERT INTO `equip_info` VALUES ('7', 'shanghai_climb1', '上海市', '攀岩', '0', null, null, '2018-05-08 17:18:58', '0');
INSERT INTO `equip_info` VALUES ('8', 'shanghai_climb2', '上海市', '攀岩', '0', null, null, '2018-05-04 20:40:56', '0');
INSERT INTO `equip_info` VALUES ('10', 'shanghai_running1', '上海市', '跑步', '0', null, null, '2018-05-15 16:30:59', '0');
INSERT INTO `equip_info` VALUES ('11', 'shanghai_running2', '上海市', '跑步', '0', null, null, '2018-05-07 15:43:12', '0');
INSERT INTO `equip_info` VALUES ('12', 'shanghai_running3', '上海市', '跑步', '0', null, null, '2018-05-05 19:17:55', '0');
INSERT INTO `equip_info` VALUES ('13', 'shanghai_running4', '上海市', '跑步', '0', null, null, '2018-05-05 18:54:14', '0');
INSERT INTO `equip_info` VALUES ('14', 'beijing_basketball', '北京市', '篮球', '0', null, null, '2018-04-28 18:46:30', '0');
INSERT INTO `equip_info` VALUES ('15', 'beijing_football', '北京市', '足球', '0', null, null, '2018-04-27 16:58:00', '0');
INSERT INTO `equip_info` VALUES ('16', 'beijing_training1', '北京市', '训练', '0', null, null, '2018-04-27 16:58:00', '0');
INSERT INTO `equip_info` VALUES ('17', 'beijing_training2', '北京市', '训练', '0', null, null, '2018-04-27 16:58:00', '0');
INSERT INTO `equip_info` VALUES ('20', 'beijing_climb1', '北京市', '攀岩', '0', null, null, '2018-05-21 17:53:37', '0');
INSERT INTO `equip_info` VALUES ('21', 'beijing_climb2', '北京市', '攀岩', '0', null, null, '2018-05-17 11:28:56', '0');
INSERT INTO `equip_info` VALUES ('23', 'beijing_running1', '北京市', '跑步', '0', null, null, '2018-05-07 10:20:19', '0');
INSERT INTO `equip_info` VALUES ('24', 'beijing_running2', '北京市', '跑步', '0', null, null, '2018-05-07 10:20:25', '0');
INSERT INTO `equip_info` VALUES ('27', 'guangzhou_basketball', '广州市', '篮球', '0', null, null, '2018-04-27 16:58:00', '0');
INSERT INTO `equip_info` VALUES ('28', 'guangzhou_football', '广州市', '足球', '0', null, null, '2018-04-27 16:58:00', '0');
INSERT INTO `equip_info` VALUES ('29', 'guangzhou_training1', '广州市', '训练', '0', null, null, '2018-04-27 16:58:00', '0');
INSERT INTO `equip_info` VALUES ('30', 'guangzhou_training2', '广州市', '训练', '0', null, null, '2018-04-27 16:58:00', '0');
INSERT INTO `equip_info` VALUES ('31', 'guangzhou_training3', '广州市', '训练', '0', null, null, '2018-04-27 16:58:00', '0');
INSERT INTO `equip_info` VALUES ('32', 'guangzhou_training4', '广州市', '训练', '0', null, null, '2018-04-27 16:58:00', '0');
INSERT INTO `equip_info` VALUES ('33', 'guangzhou_running1', '广州市', '跑步', '0', null, null, '2018-05-07 11:15:52', '0');
INSERT INTO `equip_info` VALUES ('34', 'guangzhou_running2', '广州市', '跑步', '0', null, null, '2018-05-07 10:44:37', '0');
INSERT INTO `equip_info` VALUES ('35', 'guangzhou_running3', '广州市', '跑步', '0', null, null, '2018-05-07 11:08:29', '0');
INSERT INTO `equip_info` VALUES ('36', 'guangzhou_running4', '广州市', '跑步', '0', null, null, '2018-05-07 11:12:00', '0');
INSERT INTO `equip_info` VALUES ('37', 'chengdu_basketball', '成都市', '篮球', '0', null, null, '2018-04-27 16:58:00', '0');
INSERT INTO `equip_info` VALUES ('38', 'chengdu_football', '成都市', '足球', '0', null, null, '2018-04-27 16:58:00', '0');
INSERT INTO `equip_info` VALUES ('39', 'chengdu_training1', '成都市', '训练', '0', null, null, '2018-04-27 16:58:00', '0');
INSERT INTO `equip_info` VALUES ('40', 'chengdu_training2', '成都市', '训练', '0', null, null, '2018-04-27 16:58:00', '0');
INSERT INTO `equip_info` VALUES ('43', 'chengdu_running1', '成都市', '跑步', '0', null, null, '2018-04-27 16:58:00', '0');
INSERT INTO `equip_info` VALUES ('44', 'chengdu_running2', '成都市', '跑步', '0', null, null, '2018-04-27 16:58:00', '0');
INSERT INTO `equip_info` VALUES ('45', 'shanghai_Pledge', '上海市', 'A.I.R. Pledge', '1', 'mars', '火星哥', '2018-05-15 11:47:03', '0');
INSERT INTO `equip_info` VALUES ('46', 'guangzhou_Pledge', '广州市', 'A.I.R. Pledge', '0', null, null, '2018-04-27 16:58:00', '0');
INSERT INTO `equip_info` VALUES ('47', 'beijing_Pledge', '北京市', 'A.I.R. Pledge', '0', null, null, '2018-04-27 16:58:00', '0');
INSERT INTO `equip_info` VALUES ('48', 'chengdu_Pledge', '成都市', 'A.I.R. Pledge', '1', 'god', '战神', '2018-05-15 13:58:50', '0');

-- ----------------------------
-- Table structure for leader_board_ex_tr
-- ----------------------------
DROP TABLE IF EXISTS `leader_board_ex_tr`;
CREATE TABLE `leader_board_ex_tr` (
  `game_id` int(11) NOT NULL AUTO_INCREMENT,
  `city` varchar(255) DEFAULT NULL,
  `campaign` varchar(255) DEFAULT NULL,
  `player_num` int(11) DEFAULT NULL,
  `union_id_1` varchar(255) DEFAULT NULL,
  `user_name_1` varchar(255) DEFAULT NULL,
  `ranking_1` varchar(255) DEFAULT NULL,
  `finish_time_1` varchar(255) DEFAULT NULL,
  `union_id_2` varchar(255) DEFAULT NULL,
  `user_name_2` varchar(255) DEFAULT NULL,
  `ranking_2` varchar(255) DEFAULT NULL,
  `finish_time_2` varchar(255) DEFAULT NULL,
  `union_id_3` varchar(255) DEFAULT NULL,
  `user_name_3` varchar(255) DEFAULT NULL,
  `ranking_3` varchar(255) DEFAULT NULL,
  `finish_time_3` varchar(255) DEFAULT NULL,
  `union_id_4` varchar(255) DEFAULT NULL,
  `user_name_4` varchar(255) DEFAULT NULL,
  `ranking_4` varchar(255) DEFAULT NULL,
  `finish_time_4` varchar(255) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`game_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of leader_board_ex_tr
-- ----------------------------

-- ----------------------------
-- Table structure for leader_board_info
-- ----------------------------
DROP TABLE IF EXISTS `leader_board_info`;
CREATE TABLE `leader_board_info` (
  `union_id` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `campaign` varchar(255) DEFAULT NULL,
  `level` int(1) DEFAULT NULL,
  `score` int(10) DEFAULT NULL,
  `finish_time` int(255) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of leader_board_info
-- ----------------------------
INSERT INTO `leader_board_info` VALUES ('abc123456', 'ABD', '上海市', '篮球', '1', '8', '300000', '2018-05-22 10:36:06');
INSERT INTO `leader_board_info` VALUES ('abc22222', 'ABCD', '上海市', '篮球', '1', '18', '300000', '2018-05-22 10:37:32');
INSERT INTO `leader_board_info` VALUES ('abc22222', 'ABCD', '上海市', '篮球', '2', '12', '300000', '2018-05-22 10:37:49');

-- ----------------------------
-- Table structure for player_score
-- ----------------------------
DROP TABLE IF EXISTS `player_score`;
CREATE TABLE `player_score` (
  `union_id` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `campaign` varchar(255) DEFAULT NULL,
  `score` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of player_score
-- ----------------------------
INSERT INTO `player_score` VALUES ('abc123', 'ABD', '上海市', '篮球', '3047');
INSERT INTO `player_score` VALUES ('abc1234', 'ABD', '上海市', '篮球', '13');
INSERT INTO `player_score` VALUES ('abc1233', 'ABD', '上海市', '篮球', '12');
INSERT INTO `player_score` VALUES ('abc1233333', 'ABD', '上海市', '篮球', '15555');
INSERT INTO `player_score` VALUES ('abc12345', 'ABD', '上海市', '篮球', '783');
INSERT INTO `player_score` VALUES ('abc123456', 'ABD', '上海市', '篮球', '15');
