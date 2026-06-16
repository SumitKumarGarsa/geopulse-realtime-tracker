const express = require('express');
const app = express();
const http = require("http");

const socketio = require("socket.io");

const server = http.createServer(app);


const io = socketio(server);

app.get('/', (req, res) => {
    res.send('Hey');
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});