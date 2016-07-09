var cherrio = require('cheerio');
var express = require('express');
var querystring = require('querystring');
var http = require('http');

var url = "http://www.lagou.com/jobs/positionAjax.json?";
var param = {city:'北京',pn:3,kd:'前端',first:'false'};
var url = url + querystring.stringify(param);
function getinfo() {
	var jobinfo = null;
	http.get(url,function(res){
		var html = "";
		res.on('data',function(chunk){
			html+=chunk;
		})
		res.on("end",function(){
			jobinfo = JSON.parse(html);
		})
	})
	return jobinfo;
}

module.exports.getinfo = getinfo;

