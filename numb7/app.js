const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);


const connections = [];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', (socket) => {
  connections.push(socket.id);
  io.emit('connections', connections);
  socket.on('disconnect', () => {
    const index = connections.indexOf(socket.id);
    if (index !== -1) {
      connections.splice(index, 1);
    }
    io.emit('connections', connections);
  });
});

server.listen(8000, () => {
  console.log('Сервер запущен на порту 8000');
});