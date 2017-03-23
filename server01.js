'use strict';

const { readFile } = require('fs');
const { createServer } = require('http');
const server = createServer();

server.on('request', (req, res) => {
	console.log('Incoming for: ', req.url)
	res.end('OK')
});
server.listen(8080)
