// --- LOAD MODULES
const express = require('express'),
      body_parser = require('body-parser');
const { Sequelize, Model, DataTypes } = require('sequelize');
const { sequelize } = require('./models/');
const config = require('./config/config.json');
const favicon = require('serve-favicon');
const path = require('path');

// --- App
var app = express();

// --- Static website directories
app.use(express.static(__dirname + ''));
app.use('/jsPsych', express.static(__dirname + "/jsPsych"));
app.set('views', __dirname + '');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(favicon(path.join(__dirname, 'favicon.ico')));

// --- Body parser
app.use(body_parser.json());
var urlencodedparser = body_parser.urlencoded({extended:true})

// --- ROUTING
app.get('/', function(request, response) {
    response.render('sret.html');
});

app.get('/experiment', function(request, response) {
    response.render('sret.html');
});


// --- Tell the data where to go
app.post('/experiment-data', urlencodedparser, function(request, response) {
    // console.log('app.post-ing the data');
    class Sret extends Model {}
    Sret.init({
      data: DataTypes.JSON
    }, {
      sequelize,
      modelName: 'sret'
    });
    (async () => {
      await sequelize.sync();
      const data = await Sret.create({
        data: request.body
      });
      //console.log(data);
})();
    response.redirect('/');
});

// --- Server
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

var server = app.listen(port, function(){
});


