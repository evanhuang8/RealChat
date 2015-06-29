var express = require('express');
var socketio = require('socket.io');
var app = express();

app.use('/static/', express.static('static'));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index.ejs');
});

app.listen(3000, function() {
  console.log('Server running...');
});