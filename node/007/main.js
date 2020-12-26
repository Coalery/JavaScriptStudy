const app = require('http').createServer(handler);
const io = require('socket.io')(app);
const fs = require('fs');

function handler(req, res) {
    fs.readFile('index.html', (err, data) => {
        if(err) {
            res.writeHead(500);
            return res.end('Error loading index.html');
        }
        res.writeHead(200);
        res.end(data);
    });
}

io.on('connection', (socket) => {
    socket.emit('news', { serverData : '서버 작동' });
    socket.on('client login', (data) => console.log(data));
    socket.on('disconnect', () => console.log('접속이 종료되었습니다.'));
});

app.listen(3000);