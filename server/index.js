const ws = require('ws');

const server = new ws.Server({ port: 1234 });

server.on('connection', socket => {
    console.log('connection');
    socket.on('message', message => {
        console.log(message);
    })
});
