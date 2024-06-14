const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { SerialPort } = require('serialport');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

const port = new SerialPort({ path: 'COM10', baudRate: 9600 });

port.on('open', () => {
    console.log('Serial Port Opened');
});

port.on('data', (data) => {
    console.log('Data:', data.toString());
    io.emit('serialdata', data.toString());
});

port.on('error', (err) => {
    console.error('Error: ', err.message);
});

io.on('connection', (socket) => {
    console.log('Client connected');
    
    socket.on('sendToSerial', (message) => {
        port.write(message, (err) => {
            if (err) {
                return console.log('Error on write: ', err.message);
            }
            console.log('Message written to serial port');
        });
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

// Define a route for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
