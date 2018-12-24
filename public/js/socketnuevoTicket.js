//comand to stablish connection
var socket = io();
var label = $('#lblNuevoTicket');
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});

socket.on('estadoActual', function(res) {
    console.log(res);
    label.text(res.actual);
});

$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(sigticket) {
        label.text(sigticket);
    })
});