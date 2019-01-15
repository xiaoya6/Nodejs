// 引用Express框架
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// 实例化http服务
var http = require('http').Server(app);
// 实例化socket服务
var io = require('socket.io')(http);
// 实例化https服务
var https = require('https');
// 创建一个工具类实例
var UTILS = require('../utils/utils.js');
// 日志系统
var LOGGER = require('../utils/log1024j.js');
// 配置
var CONFIG = require('../config/config.js');
// 数据库实例
var db = require('../db/node-mysql.js');
// 数据库sql加载
var sqls = require('./sqls/sqls.js');

var unityID = '';
// 加载定时任务
require('../batch/schedule_manager.js');
// 静态文件引用
app.use(express.static("./WebSrc"));
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());
// 本地服务器监听事件
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/WebSrc/index.html');
});
app.get('/main', function(req, res) {
	res.sendFile(__dirname + '/WebSrc/html/main.html');
});

// 下载当天日志
app.get('/downloadLog', function(req, res) {
	res.download(CONFIG.LOG_PATH + CONFIG.LOG_PATH_FORMAT);
});
//监听http端口
http.listen(CONFIG.SOCKET_CONFIG.PORT, function() {
	LOGGER('listening on *:' + CONFIG.SOCKET_CONFIG.PORT);
	LOGGER('!===========================HTTP STARTED===========================!');
	LOGGER('!=========================SOCKET LISTENING=========================!');
});
io.on('connection', function(socket) {

	LOGGER(socket.id + "is connected!!!");
	//	if (io.sockets.connected[socket.id]) {
	//      io.sockets.connected[socket.id].emit('message','surprise');
	//  }
	//  io.to(socket.id).emit('message','surprise');

	// 初始化判断客户端类型
	socket.emit("AskClientKind", {
		message: "init"
	});

	//初始化unityID，IpadID
	socket.on("AskClientKindCB", function(data) {
		try {
			LOGGER("data:" + data);
			if(data.kind == "unity") {
				if(unityID == "") {
					unityID = socket.id;
					LOGGER("unityID:" + unityID);
				} else {
					// 双开了
					LOGGER("The Old Untiy Program is still connecting!!!Please check computer!!!");
				}
			}
		} catch(e) {
			SocketErrorListen(socket, "AskClientKindCB", e);
		}
	});

	//IPAD扫码结果反馈
	socket.on("ReceiveScanNum", function(data) {

		try {
			var minapp_url = "/API/nikeshmflip/loadname.ashx?openid=" + data.QRNum;
			var options = {
				hostname: "www.wonderlabsstudio.com",
				port: 443,
				path: minapp_url,
				method: 'POST'
			};
			var req = https.request(options, (res) => {
				res.on('data', (d) => {
					// 此处 输出回调
					LOGGER("ReceiveScanNum respone:" + d);
					var jsonData = JSON.parse(d);
					if(jsonData.code == 1) {
						if(data.equipNum == "ipad1") {
							socket.emit("ReceiveScanNumCB", {
								result: "true",
								fname: jsonData.content[0].fname,
								lname: jsonData.content[0].lname,
								time: jsonData.content[0].submitTime
							});

							io.emit("SendHavePeopleMes", {
								fname: jsonData.content[0].fname,
								lname: jsonData.content[0].lname,
								time: jsonData.content[0].submitTime
							});
							LOGGER("ReceiveScanNum request:" + data.QRNum);
							LOGGER("ReceiveScanNum respone:" + jsonData.ms);
							LOGGER("ReceiveScanNum respone content:" + JSON.stringify(jsonData.content[0]));
						}
						//						else if(data.equipNum == "ipad2") {
						//							LOGGER("CHECKIN:"+jsonData.content[0].checkin);
						//							socket.emit("ReceiveScanNumCB", {
						//								result: "true",
						//								checkin: jsonData.content[0].checkin
						//							});
						//						}
					} else {
						LOGGER("ReceiveScanNum ERROR:" + JSON.parse(d).ms);
					}

				});

			});
			req.on('error', (e) => {

				LOGGER(e);
			});
			req.end();
		} catch(e) {
			SocketErrorListen(socket, "ReceiveScanNum", e);
		}
	});

	socket.on("CheckIn", function(data) {
		try {
			var minapp_url = "/API/nikeshmflip/updateCheckin.ashx?openid=" + data.QRNum;
			var options = {
				hostname: "www.wonderlabsstudio.com",
				port: 443,
				path: minapp_url,
				method: 'POST'
			};
			var req = https.request(options, (res) => {
				res.on('data', (d) => {
					// 此处 输出回调
					LOGGER("CheckIn respone:" + d);
					var jsonData = JSON.parse(d);
					LOGGER("code:" + jsonData.code);

					if(jsonData.code == 1) {
						socket.emit("CheckInBC", {
							result: "true",
						});
						LOGGER("CheckIn respone:" + jsonData.ms);
					} if(jsonData.code == 0) {
						socket.emit("CheckInBC", {
							result: "false",
						});
						LOGGER("CheckIn ERROR:" + JSON.parse(d).ms);
					}

				});

			});
			req.on('error', (e) => {

				LOGGER(e);
			});
			req.end();
		}catch(e){
			LOGGER(e);
		}
});


	//发送给unity已经接受到有人的消息
	socket.on("SendHavePeopleMesCB", function(data) {
		LOGGER("SendHavePeopleMesCB:" + data.mes);
	});

	//接收到unity可以拍照信息
	socket.on("SendCanTakePhoto", function(data) {
		LOGGER("SendCanTakePhoto:" + data.mes);
		//发送给unity已经接收到拍照的消息
		socket.emit("SendCanTakePhotoCB", {
			message: "SendCanTakePhotoCB"
		});

		io.emit("SendTakePhoto", {
			message: "SendTakePhoto"
		});
	});

	//接收到ipad点击拍照指令
	socket.on("OnClickPhoto", function(data) {
		socket.emit("OnClickPhotoCB", function() {
			message: "receive"
		});
		//广播拍照指令
		io.emit("SendTakePhotoBC", {
			message: "takePhoto"
		});
	});

	socket.on("SendTakePhotoBCCB", function(data) {
		LOGGER("SendTakePhotoBCCB:" + data.mes);
	});

	socket.on("SendNextPeople", function(data) {
		socket.emit("SendNextPeopleCB", {
			message: "receive"
		});

		io.emit("SendNextPeopleBC", {
			maeesge: "nextpeople"
		});
	});

	//断开链接消息
	socket.on("disconnect", function() {
		try {
			if(socket.id == unityID) {
				unityID = "";
				LOGGER("unity disconnct");
			}
		} catch(e) {
			SocketErrorListen(socket, "disconnect", e);
		}

	});

});

//Socket异常捕捉
function SocketErrorListen(socket, code, err) {
	LOGGER(code + ":" + err);
	var mes = {
		"message": err
	};
	socket.emit(code, mes);
}

function GetInfo(options) {
	var req = https.request(options, (res) => {
		res.on('data', (d) => {
			// 此处 输出回调

			LOGGER(d);
		});
	});
	req.on('error', (e) => {

		LOGGER(e);
	});
	req.end();
}