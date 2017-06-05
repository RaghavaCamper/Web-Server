var express = require('express');
var app = express();
var PORT = 3000;
var middleware = require('./middleware.js')


app.use(middleware.logger);
app.get('/aboutUs', middleware.requireAuthentication, function(req, res){
   res.send('This is about us and you');
});
app.use(express.static(__dirname + '/public'));
app.listen(PORT, function(){
 console.log('Express server started');
 console.log(PORT);
});