// const app = require('./app');

const path = require('path');
const http = require('http');

const express = require('express');
const socketio = require('socket.io');

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, './public');
const homeRouter = require('./routers/home');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(publicDirectoryPath));
app.use(express.json());
app.use(homeRouter);


// server(emit) -> client (receive) - count updated
// client(emit) -> server (receive) - increment

io.on('connection', (socket) => {
    console.log('New WebSocket connection');

   socket.emit('message', 'Welcome!');
   socket.broadcast.emit('message', 'A new user has joined!'); //all other instances except this one receive this msg

   socket.on('sendMessage', (msg) => {
        io.emit('message', msg);
   });

   socket.on('disconnect', () => {
       io.emit('message', 'A user has left!');
   })

    socket.on('sendLocation', (coords) => {
        io.emit('message', `https://google.com/maps?q=${coords.latitude},${coords.longitude}`);
    })

})

server.listen(port, () => {
    console.log("Server is up on " + port);
});

module.exports = app;
