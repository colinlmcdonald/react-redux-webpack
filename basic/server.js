var express = require('express');
var path = require('path');
var publicPath = path.resolve(__dirname, 'public');

var port = 3000;

var app = express();

//serving our index.html
app.use(express.static(publicPath));

app.listen(port, function () {
  console.log('Server running on port ' + port)
});