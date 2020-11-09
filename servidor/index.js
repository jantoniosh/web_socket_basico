const express = require('express');
const cors = require('cors');
const app = express();
const server = app.listen(3001, console.log("Socket.io Hello World server started!"));
const io = require('socket.io')(server);

app.get('/', (req, res) => {
	res.send('<h1>Hello Mensajito</h1>');
});

io.on('connection', (socket) => {
	console.log("cliente conectado");

	socket.on('mensaje', (msg) => {
                console.log("Llego un mensaje");
		if (msg === "1") {
			console.log("En Vivo");
			socket.broadcast.emit('resp', 'Vivo');
		}
		if (msg === "0") {
			console.log("En Pausa");
			socket.broadcast.emit('resp', 'Pausa');
		}
                // socket.broadcast.emit('resend', msg);
        });

	socket.on('disconnect', () => {
		console.log('usuario desconectado');
	});
});
