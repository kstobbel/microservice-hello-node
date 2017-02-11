var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());

app.get('/hello', function (req, res) {
  res.send('Hello World');
});

var server = app.listen(3000);
