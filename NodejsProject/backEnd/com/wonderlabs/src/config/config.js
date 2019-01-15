//日志配置
//日志控制台打印开关
var LOG_PRINT = 'ON'; // LOG_PRINT 为ON时，控制台日志打印，其他值为不打印
//控制台日志路径
var LOG_PATH = "d:/log/NikeFilp/log";
//日志格式
var LOG_PATH_FORMAT = ".txt";
// 是否日志输出数据库检索结果
var LOGGER_DB_RESULT_FLAG = false;

//服务器文件路径
var FILE_PATH = "../../file";

//数据库配置
//数据库连接属性
var MYSQL_CONFIG = {
	host: 'localhost',
	user: 'root',
	//password: 'wonderlabs2013',
	database: 'node_test',
	timezone:'+8:00'
};
//数据库字符编码配置
var MYSQL_UTF = "SET character_set_client=utf8,character_set_connection=utf8";
//断线消息
var MYSQL_CONNECT_ERROR = 'error';

//SOCKET通讯服务配置
var SOCKET_CONFIG = {
	PORT: 3001,
	SOCKET_TRANSPORTS: 'websocket'
};

//定时任务启动开关
var SCHEDULE_START = 'ON'; // LOG_PRINT 为ON时，控制台日志打印，其他值为不打印
//外部访问声明
module.exports = {
	LOG_PRINT,
	MYSQL_CONFIG,
	MYSQL_UTF,
	MYSQL_CONNECT_ERROR,
	SOCKET_CONFIG,
	LOG_PATH,
	LOG_PATH_FORMAT
}