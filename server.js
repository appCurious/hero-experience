const express = require('express');
const fs = require('fs');
const https = require('https');
const cors = require('cors');


const app = express();
app.use(cors());

app.use(express.static(__dirname));

app.get('/my-hero', function (req, res) {
	console.log('requesting hero js')
	res.sendFile(__dirname + '/hero-element.js');
});

app.get('/src/*', function (req, res) {
	res.sendFile(__dirname + req._parsedUrl.path);
});


// const server = app.listen(50021, function () {
// 	console.log('running on 50021');
// });

const server = https.createServer({
	key: fs.readFileSync(__dirname + '/server.key'),
	cert: fs.readFileSync(__dirname + '/server.cert.pem')
}, app).listen(50021, function () {
	const host = server.address().address;
	const port = server.address().port;
	console.log('running on https://%s:%s','localhost',port);
});

  