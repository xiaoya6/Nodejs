//控制台日志工具类
var fs = require('fs');
var sd = require('silly-datetime');
var CONFIG = require('../config/config.js');

var DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';
var LINE_CODE = "\n";
var COLON = " : ";
//日志启动后台显示
console.log(sd.format(new Date(), DATE_FORMAT) + " : !! SUPER LOG RECORDER is loading !!");
console.log(sd.format(new Date(), DATE_FORMAT) + " : current console log print is " + CONFIG.LOG_PRINT + ".");

/**
 * Print log on console and append to log file
 * @param {string} log
 */
function appendLog(log) {

	log = sd.format(new Date(), DATE_FORMAT) + COLON + log;
	fs.appendFile(CONFIG.LOG_PATH + CONFIG.LOG_PATH_FORMAT, log + LINE_CODE, function(err) {
		if(err) {
			return console.log(err);
		}
	});
	if(CONFIG.LOG_PRINT == 'ON') {
		console.log(log);
	}
}
//外部访问声明
module.exports = appendLog;