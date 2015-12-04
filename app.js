var express = require('express');
var app = express();
var routes = require('./routes');
app.set('view engine','ejs');



app.get('/', routes.index);
app.get('/about', routes.about);

app.get('*',function(req,res)
	{
		res.send('<b>Sorry!!No such page found<b/>');
	});

var server = app.listen(3000,function(){
        	console.log('Listening on port 3000');
        }); 
