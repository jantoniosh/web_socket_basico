$(document).ready(function () {
    let status = false;
    let socket = new io('http://159.65.84.223:3001', {transports: ['websocket', 'polling', 'flashsocket']});
    // let socket = new io('https://radiocacomixtle.com/mensajito', {transports: ['websocket', 'polling', 'flashsocket']});

    $("#b_1").click(function () {
        if (!status) {
            $(this).css("background-color", "red");
            socket.emit("mensaje", "1");
        }
        else {
            $(this).css("background-color", "black");
            $("#t_1").text("INICIAR");
            socket.emit("mensaje", "0");
        }
        status = !status;
    });
});