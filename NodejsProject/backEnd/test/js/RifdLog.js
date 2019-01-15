var old = $("#1").children('td');
//连接websocket后端服务器
this.socket = io.connect('http://192.168.100.39:2468', {
	transports: ["websocket"]
});

setInterval("timeShow.innerHTML=new Date().toLocaleString()+' 星期'+'日一二三四五六'.charAt(new Date().getDay());", 1000);

$(function() {
	$.ajax({
		type: "get",
		url: "/GetPiList",
		dataType: "json",
		success: function(data) {
			console.log(data.message);
			if(data.data) {
				$.each(data.data, function(infoIndex, info) {
					var logMessage = "<tr id=" + info["pi"] + "><td>" + info["pi"] + "</td><td>" + info["name"] + "</td><td></td><td></td></tr>";
					$("#log").append(logMessage);
				});
			} else {
				alert('失败');
			}
		}
	});
});
socket.on("server_pi_msg", function(data) {
	var mydate = new Date();
	var str = (mydate.getMonth() + 1) + "月";
	str += mydate.getDate() + "日 ";
	str += mydate.getHours() + ":";
	str += mydate.getMinutes() + ":";
	str += mydate.getSeconds();
	//var logMessage = "<tr><td>" + index + "</td><td>" + data.id + "</td><td>" + data.rfid + "</td><td>" + str + "</td></tr>"
	old.css("color", "black");
	old = $("#" + data.id).children('td');
	old.eq(2).html(data.rfid);
	old.eq(3).html(str);
	old.css("color", "red");

});