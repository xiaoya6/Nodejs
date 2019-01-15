//import others
var CONFIG = require('../config/config.js');
var LOGGER = require('../utils/log1024j.js');
var mysql = require('mysql');
var sd = require('silly-datetime');

// define something
var connection;
var COLON = ":";
var RESULT_EMPTY = "";
var DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';
var INSERT_STRING="INSERT";
var DELETE_STRING="DELETE";
var UPDATE_STRING="UPDATE";
var SELECT_STRING="SELECT";

/**
 * db disconnect listen
 * @param {Object} err: err object
 */
function handleError(err) {
	if(err) {
		// 如果是连接断开，自动重新连接
		if(err.code === "PROTOCOL_CONNECTION_LOST") {
			myconnect();
		} else {
			LOGGER(console.error(err.stack || err));
		}
	}
}
/**
 * MySQLHeartBeat
 * @param {function} callback -- callback function 
 */
function MySQLHeartBeat(callback) {
	connection.query("SELECT 1;", function(err, result) {
		callback(result, err);
	});
}

/**
 * mysql local settings
 */
function myconnect() {
	connection = mysql.createConnection(CONFIG.MYSQL_CONFIG);
	connection.connect(handleError);
	connection.on(CONFIG.MYSQL_CONNECT_ERROR, handleError);
	connection.query(CONFIG.MYSQL_UTF);
	LOGGER("DB host:"+CONFIG.MYSQL_CONFIG.host+"-->db name: "+CONFIG.MYSQL_CONFIG.database);
	LOGGER('!============================DB STARTED============================!');
}

//start mysql service by local settings
myconnect();
/**
 * select all data can match the condition
 * @param {string} sql
 * @param {string[]} params
 * @param {Function} callback 
 */
function SelectByCondition(sql,params,callback){
	connection.query(sql, params, function(err, result) {
		LOGGER(sql + "param:" + params.toString());
		ResultLog(sql + "param:" + params.toString(),SELECT_STRING,err,result);
		callback(result, err);
	});
}
/**
 * select singleton table
 * if you want to use this fuction , you only just set argument by table name which table you want to get
 * @param {string} tableName : table name which table you want to get
 * @param {Function} callback
 */
function SelectAll(tableName,callback){
	connection.query("select * from "+tableName,  function(err, result) {
		LOGGER("select * from "+tableName);
		ResultLog("select * from "+tableName,SELECT_STRING,err,result);
		callback(result, err);
	});
}


function SelectInfoByOpenId(sql, callback) {
	connection.query(sql,  function(err, result) {
		LOGGER(sql);
		ResultLog(sql ,SELECT_STRING,err,result);
		
		if(result != RESULT_EMPTY) {
				LOGGER("SelectInfoByOpenId:" + JSON.stringify(result));
			} else {
				LOGGER("SelectInfoByOpenId is empty!");
			}
		
		callback(result, err);
	});
}


/**
 * select with out param
 * @param {Object} sql
 * @param {Object} callback
 */
function SelectSomeWithOutParam(sql,callback){
	
	connection.query(sql,  function(err, result) {
		LOGGER(sql);
		ResultLog(sql ,SELECT_STRING,err,result);
		callback(result, err);
	});
}
/**
 * insert data
 * @param {string} sql
 * @param {string[]} params
 * @param {Function} callback
 */
function InsertData(sql,params,callback) {
	connection.query(sql,params,  function(err, result) {
		LOGGER(sql);
		ResultLog(sql+params,INSERT_STRING,err,result);
		callback(result, err);
	});
}
/**
 * delete data
 * @param {string} sql
 * @param {string[]} params
 * @param {Function} callback
 */
function DeleteData(sql,params,callback) {
	connection.query(sql,params,  function(err, result) {
		LOGGER(sql);
		ResultLog(sql+params,Delete_STRING,err,result);
		callback(result, err);
	});
}
/**
 * update data
 * @param {string} sql
 * @param {string[]} params
 * @param {Function} callback
 */
function UpdateData(sql,callback) {
	connection.query(sql,  function(err, result) {
		LOGGER(sql);
		ResultLog(sql,UPDATE_STRING,err,result);
		callback(result, err);
	});
//	connection.query(sql,params,  function(err, result) {
//		LOGGER(sql);
//		ResultLog(sql+params,UPDATE_STRING,err,result);
//		callback(result, err);
//	});
}
/**
 * ResultLog
 * @param {string} sql
 * @param {string} kind ::select||insert||delete||update
 * @param {Object} err
 * @param {string[]} result
 */
function ResultLog(sql,kind,err,result){
	var msg={};
	if(kind = INSERT_STRING){
		msg[0] = "INSERT_ERROR";
		msg[1] = "INSERT_SUCCESS_RESULT";
		msg[2] = "INSERT_NO_RESULT";
	}else if(kind = DELETE_STRING){
		msg[0] = "DELETE_ERROR";
		msg[1] = "DELETE_SUCCESS_RESULT";
		msg[2] = "DELETE_NO_RESULT";
	}else if(kind = UPDATE_STRING){
		msg[0] = "UPDATE_ERROR";
		msg[1] = "UPDATE_SUCCESS_RESULT";
		msg[2] = "UPDATE_NO_RESULT";
	}else{
		msg[0] = "SELECT_ERROR";
		msg[1] = "SELECT_SUCCESS_RESULT";
		msg[2] = "SELECT_NO_RESULT";
	}
	PrintLog(sql,err,result,msg[0],msg[1],msg[2]);
}
/**
 * PrintLog
 * @param {string} sql:sql
 * @param {Object} err:err json
 * @param {string[]} result:sql result
 * @param {string} str1
 * @param {string} str2
 * @param {string} str3
 */
function PrintLog(sql,err, result,str1,str2,str3) {
	if(err) {
		LOGGER(str1 + err.message +" -->"+sql);
	} else {
		if(result != RESULT_EMPTY) {
			if(CONFIG.LOGGER_DB_RESULT_FLAG){
				LOGGER(str2 + JSON.stringify(result));
			}
		} else {
			LOGGER(str3 + JSON.stringify(result));
		}
	}
}

module.exports = {
	MySQLHeartBeat,
	SelectByCondition,
	SelectAll,
	SelectSomeWithOutParam,
	SelectInfoByOpenId,
	InsertData,
	UpdateData,
	DeleteData
}