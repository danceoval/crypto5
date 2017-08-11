var express = require("express");
var path = require('path');

var app = express();


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/codeCheck.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'codeCheck.js'));
});

app.listen(process.env.PORT || 3000, () => {
	console.log("running")
});
