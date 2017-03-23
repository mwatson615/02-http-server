'use strict';
const {createReadStream} = require('fs')
const readStream = createReadStream('index.html');


const { readFile } = require('fs');
const { createServer } = require('http');
const server = createServer();

server.on('request', ({url, method, headers}, res) => {
	// console.log('Incoming for: ', req.url)
	// res.end('OK')


const path = url.slice(-1) === '/'
? url.slice(1).concat('index.html')
: url.slic(1)
console.log('Request received for ' + path);

readFile('index.html', (err, buff) => {
	if (err) {
		res.statusCode = 404;
		console.log('response', res);
		return res.end('no luck')
	}
	res.end(`<h1>Hello Worm</h1>`)
	});
});
server.listen(8080)
