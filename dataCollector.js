// Simple app for scraping data from Ambient Weather receiver device
// Matthew Epler, 2015
// Do whatever you want with this

var exec = require('child_process').exec;
var request = require('request');
var cheerio = require('cheerio');

var data = [];

setInterval( function() {
	var url = "http://192.168.0.99/livedata.htm";
	request(url, function(err, res, body) {
		if(!err && res.statusCode == 200) {
			var $ = cheerio.load(body);
			$('input').each( function() {
				data.push({name:$(this).attr('name'), value:$(this).attr('value')});
			});
			console.log(data);
		} else {
			console.log("ERROR w/ request: " + err);
		}
	});
}, 1000);
