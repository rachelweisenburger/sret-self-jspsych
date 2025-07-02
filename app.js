// --- LOAD MODULES
var express = require('express');

// --- App
var app = express();

// --- Static website directories
app.use(express.static(__dirname + ''));
app.use('/jsPsych', express.static(__dirname + "/jsPsych"));
app.set('views', __dirname + '');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// --- ROUTING
app.get('/', function(request, response) {
    response.render('sret.html');
});

app.get('/experiment', function(request, response) {
    response.render('sret.html');
});

// --- Server
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

var server = app.listen(port, function(){
    console.log('Listening on port %d', server.address().port);
});

