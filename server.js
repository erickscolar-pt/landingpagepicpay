const express = require('express');
const caminho = require('caminho');
const app = express();
app.use(express.static(__dirname + '/dist/picpay'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/picpay/index.html'));});
app.listen(process.env.PORT || 8080);