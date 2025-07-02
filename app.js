var express = require('express');
var app = express();
app.get('/', function(request, response) {
    response.send('Hello, Express!');
});
var server = app.listen(3000, function(){
    console.log("Listening on port %d", server.address().port);
});
/Users/rlw3693/Documents/GitHub/sret-self-jspsych
