const http = require('http').createServer(handler);
const io = require('socket.io')(http);
const fs = require('fs');

function handler(req, res) {
    fs.readFile('index.html', encoding = 'utf8', (err, data) => {
        if(err) {
            res.writeHead(500);
            res.end('Error occurred while opening the index file.');
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
}

var count = 1;
io.on('connection', (socket) => {
    console.log(`User Connected: ${socket.id}`);
    socket.name = '익명' + count++;

    socket.emit('username', socket.name);

    socket.on('chat', (data) => {
        let msg = '';

        if(socket.name !== data.name) {
            msg = `${socket.name} 님이 ${data.name} 으로 이름을 변경하였습니다.`;
            socket.name = data.name;
        }
        if(data.msg) {
            if(msg !== '') msg = msg + '\n';
            msg = msg + `${data.name} : ${data.msg}`;
        }

        io.emit('receive chat', msg);
    });
    
    socket.on('login', (data) => {
        io.emit('new user', socket.name);
    });

    socket.on('disconnect', () => {
        console.log(`User Disconnected: ${socket.id} ${socket.name}`);
        io.emit('user exit', socket.name);
    });
});

http.listen(3000, () => console.log('Server On!'));