
exports.index = function(req,res){
        
        res.render('default' , {
        	title : 'Home',
        	classname : 'home',
        	users : ['Aakash','Vishal','Megha','Daksh']
        });        
};

exports.about = function(req,res){
        
        res.render('default' , {
        	title : 'About us',
        	classname : 'about'
        });        
};
