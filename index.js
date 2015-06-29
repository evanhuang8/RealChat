var express = require('express');
var session = require('express-session');
var socketio = require('socket.io');
var app = express();

app.use(session({
  secret: 'tooreal',
  cookie: {
    httpOnly: false,
    secure: false,
    maxAge: null
  }
}));

app.use('/static/', express.static('static'));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index.ejs');
});

app.listen(3000, function() {
  console.log('Server running...');
});