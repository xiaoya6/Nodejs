//每天更新日志文件名
var fs = require('fs');
var sd = require('silly-datetime');
var schedule = require('node-schedule');
var CONFIG = require('../config/config.js');
var LINE = "-";
var DATE_FORMAT = 'YYYY-MM-DD';

function scheduleCronstyle() {

	// 每日0点0分0秒 更新log文件名为前一日日期
	schedule.scheduleJob('0 0 0 * * *', function() {
		//前一天日期
		var yesterday = sd.format(new Date(new Date() - 24 * 60 * 60 * 1000), DATE_FORMAT);
		fs.rename(CONFIG.LOG_PATH + CONFIG.LOG_PATH_FORMAT, CONFIG.LOG_PATH + LINE + yesterday + CONFIG.LOG_PATH_FORMAT, function(err) {
			if(err) {
				return console.error(err.stack || err);
			}else{
				console.log('LOG FILE IS UPDATED!!!!!!!!!!!!');
			}
		});
	});
}

scheduleCronstyle();