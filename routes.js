var request = require('request');
var url = require('url');

function getFromLive(path, cb) {
	var urlToGet = url.format({
		protocol: 'http',
		host: 'www.net-a-porter.com',
		pathname: path
	});
	request(urlToGet, function(err, response, body) {
		cb(body);
	});
}

module.exports = function(server) {
	server.get('/', function(req, res){
		var options = {
			root: __dirname
		};
		res.sendFile('index.html', options)
	});

	server.get('/api/styling/products/:pid/:channelID/outfits.json', function(req, res){
		getFromLive(req.originalUrl, function(data){
			res.status(200).send(data);
		});
	});
};