const app = require('http');
const fs = require('fs');
const path = require('path');

app.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type' : 'text/plain;charset=utf-8' });
    fs.readFile(path.join(__dirname, 'hello.txt'), encoding = 'UTF-8', (err, data) => {
        res.end(data);
    });
}).listen(3000);

console.log('Server is running at http://localhost:3000/');