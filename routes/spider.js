var cherrio = require('cheerio');
var express = require('express');
var http = require('http');

var url = "http://www.lagou.com/jobs/positionAjax.json?city=北京&pn=3&kd=前端&first=false";

function getinfo(){
	http.get(url,function(res){
		var html = "";
		res.on('data',function(chunk){
			html+=chunk;
		})
		res.on("end",function(){
			console.log(html);
		})
	})
}

module.exports.getinfo = getinfo;

