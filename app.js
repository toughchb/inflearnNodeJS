var express = require('express')
var app = express()

var bodyParser = require('body-parser')
app.listen(4500, function(){
	console.log("start! express server on port 4500");

});
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine','ejs')
//app.set('views','./view');
// app.engine('html', require('ejs').renderFile);


//url routing
app.get('/',function(req,res){
	res.sendFile(__dirname + "/public/main.html")
});

app.get('/main',function(req,res){
	res.sendFile(__dirname + "/public/main.html")
});

app.get('/form',function(req,res){
	res.sendFile(__dirname + "/public/form.html")
	// res.render(__dirname + "/public/form.html")
});

app.post('/email_post', function(req,res){
	console.log(req.body.email)
	//res.send("<h1>welcome " + req.body.email + "</h1>")
	res.render('email.ejs', {'email' : req.body.email})
	//res.send('/view/email.ejs', {'email' : req.body.email})
});

app.post('/ajax_send_email',function(req,res){
	console.log(req.body.email)
	var responseData = {'result': 'ok', 'email':req.body.email}
	res.json(responseData)
});
