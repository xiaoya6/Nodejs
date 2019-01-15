//自定义工具类类类
var xlsx = require('node-xlsx');
var qr_image = require('qr-image');
var fs = require('fs');
var sd = require('silly-datetime');
// 日志系统
var LOGGER = require('./log1024j.js');
// 导入md5
var md5 = require("md5")
var DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';
var RESULT_EMPTY = "";

/**
 * 时间格式化
 * @param {Date} datetime
 */
function FormatDateTimeByYYMMDDhhmmss(datetime){
	return sd.format(datetime, DATE_FORMAT);
}

/**
 * 字符串空判断
 * @param {string} str
 */
function IsEmpty(str) {
	if(str == "" || str == null || str == undefined) {
		return true;
	} else {
		return false;
	}
}

/**
 * 获取指令参数(cmd 模式下)
 * @param {int} index :  msg 下标根据实际情况选择
 */
function GetProcessArgs(index) {
	return process.argv.splice(index);
}

// 导出excel
/**
 * 
 * @param {string} path
 * @param {string} sheetname
 * @param {Array} data
 */
function ExportExcelFile(path, sheetname, data) {
	var buffer = xlsx.build([{
		name: sheetname,
		data: data
	}]);
	fs.writeFileSync(path, buffer, 'binary');
}

/**
 * 数据库检索结果转化为excel数据格式
 * @param {Object} json
 */
function ExportDbToExcelData(json) {
	var data = new Array();
	var title = new Array();
	var temp1 = 0;
	for(var key in json[0]) {
		title[temp1] = key;
		temp1++;
	}
	data[0] = title;
	var temp2 = 1;
	for(var key in json) {
		var data_line = new Array();
		var temp3 = 0;
		for(var item in json[key]) {
			data_line[temp3] = json[key][item];
			temp3++;
		}
		data[temp2] = data_line;
		temp2++;
	}
	console.log(data);
	return data;
}

/**
 * 读取json文件
 * @param {string} path
 */
function GetValueOfJsonFile(path) {
	return JSON.parse(fs.readFileSync(path));
}

/**
 * Json转码base64
 * @param {string} obj
 */
function EncodeJsonToBase64(obj) {
	return new Buffer(obj,'utf8').toString('base64');
}

/**
 * Json解码base64
 * @param {string} obj
 */
function EncodeJsonFromBase64(obj) {
	return new Buffer(obj, 'base64').toString('utf8');
}

/**
 * md5加密
 * @param {string} obj
 */
function MD5Func(obj) {
	return md5(obj);
}

/**
 * Create a PDF file
 * @param {string} fileName
 * @param {string} filePath
 */
function CreatePdf(fileName,filePath,width,height){
	// TODO
}
/**
 * 生成二维码图片
 * @param {string} fileName
 * @param {string} filePath
 * @param {string} qrcodeString
 * @param {int} qrcodeSize
 * @param {string} level
 */
function CreateQRcodeImg(filePath,fileName,qrcodeString,qrcodeSize,level){
	var temp_qrcode = qr_image.image(qrcodeString,{ ec_level: level ,size:qrcodeSize})//设置容错率level为30%
	temp_qrcode.pipe(require('fs').createWriteStream(filePath+fileName).on('finish', function(){
	      LOGGER('CreateQRcodeImg finished');
	     }
	));
}

module.exports = {
	IsEmpty,
	GetProcessArgs,
	ExportExcelFile,
	ExportDbToExcelData,
	GetValueOfJsonFile,
	MD5Func,
	EncodeJsonFromBase64,
	EncodeJsonToBase64,
	FormatDateTimeByYYMMDDhhmmss,
	CreatePdf,
	CreateQRcodeImg
}