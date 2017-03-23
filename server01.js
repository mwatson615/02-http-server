'use strict';
const {createReadStream, readFile} = require('fs')
const readStream = createReadStream('index.html');

const { createServer } = require('http');
const server = createServer();

server.on('request', (req, res) => {
// readStream
// .on('error', (err) => {
// 	res.end(error)
// })
// .on('open', () => {
// 	readStream.pipe(res)
// })
//readStream emits an event called close, which calls res.end

// const path = url.slice(-1) === '/'
// ? url.slice(1).concat('index.html')
// : url.slic(1)
// console.log('Request received for ' + path);


readFile('index.html', (err, buff) => {
	if (err) {
		res.statusCode = 404;
		console.log('response', res);
		return res.end('no luck')
	}
	res.end(buff + `<h1>Hello Worm</h1>`)
	});
});
server.listen(8080)
