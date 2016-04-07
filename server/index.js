var express = require('express');
var app = express();

var port = process.env.port || 5555;

app.use(express.static('app'));

app.listen(port, function (err) {
	if(err) {
		console.log(err);
		return
	}
	console.log('Server running on port ' + port + '...');
});