const express = require('express');
const app = express();
const http = require("http");

const socketio = require("socket.io");

app.get('/', (req, res) => {
    res.send('Hey');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});