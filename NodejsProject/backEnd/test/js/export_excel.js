var express = require('express');
var xlsx = require('node-xlsx');
var fs = require('fs');

var test = [{
	"user_name": "admin",
	"password": "admin",
	"authority": 1,
	"update_time": "2018-02-01T09:26:55.000Z",
	"create_time": "2018-02-01T09:26:51.000Z"
}, {
	"user_name": "admin2",
	"password": "admin",
	"authority": 1,
	"update_time": "2018-02-01T09:26:55.000Z",
	"create_time": "2018-02-01T09:26:51.000Z"
}];
// write
function ExportExcelFile(path, sheetname, data) {
	var buffer = xlsx.build([{
		name: sheetname,
		data: data
	}]);
	fs.writeFileSync(path, buffer, 'binary');
}

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
ExportExcelFile( 'test.xlsx','1',ExportDbToExcelData(test));