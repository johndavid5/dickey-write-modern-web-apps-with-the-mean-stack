var jutils = require('../lib/jutils.js');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

//app.use(require('./controllers/api/posts'));
// Use '/api/posts' namespace...so controllers/api/posts only has
// to refer to '/' rather than '/api/posts'...
app.use('/api/posts', require('./controllers/api/posts'));
app.use('/', require('./controllers/static'));


var le_port = 3000;

app.listen(le_port,
	function(){
		console.log( "[" + jutils.dateTimeCompact() + "]: " +
		'Server listening on port ', le_port, "...");
	}
);
	