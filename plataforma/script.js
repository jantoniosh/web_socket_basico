$(document).ready(function () {
    let status = false;
    let socket = new io('http://159.65.84.223:3001', { transports: ['websocket', 'polling', 'flashsocket'] });
    // let socket = new io('https://radiocacomixtle.com/mensajito', {transports: ['websocket', 'polling', 'flashsocket']});

    socket.on('resp', (msg) => {
        console.log(msg);
    });
});