var express = require('express');
var app = express();

app.set('view engine','ejs');

app.get('/', function(req,res){
        
        res.render('default' , {
        	title : 'Home',
        	classname : 'home',
        	users : ['Aakash','Vishal','Megha','Daksh']
        });        
});

app.get('/about', function(req,res){
        
        res.render('default' , {
        	title : 'About us',
        	classname : 'about'
        });        
});

app.get('*',function(req,res)
	{
		res.send('<b>Sorry,No such page found<b/>');
	});

var server = app.listen(3000,function(){
        	console.log('Listening on port 3000');
        }); 
