//每天更新日志文件名
var fs = require('fs');
var sd = require('silly-datetime');
var schedule = require('node-schedule');
var db = require('../db/node-mysql.js');
var LOGGER = require('../utils/log1024j.js');
var CONFIG = require('../config/config.js');
var LINE = "-";
var DATE_FORMAT = 'YYYY-MM-DD';

function scheduleMySQLHeartBeat() {

	var rule2 = new schedule.RecurrenceRule();
	var times2 = [1, 6, 11, 16, 21, 26, 31, 36, 41, 46, 51, 56];
	rule2.minute = times2;
	// 每5分钟心跳连接一次
	schedule.scheduleJob(rule2, function() {
		db.MySQLHeartBeat(function(r,e){
			if(e){
				LOGGER("schedule_remote_db_heartbeat:"+JSON.stringify(e));
			}
			else{
				LOGGER("schedule_remote_db_heartbeat:"+JSON.stringify(r));
			}
		});
	});
}

scheduleMySQLHeartBeat();