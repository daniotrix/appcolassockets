var socket = io();
var lblTicket1 = $('#lblTicket1');
var lblTicket2 = $('#lblTicket2');
var lblTicket3 = $('#lblTicket3');
var lblTicket4 = $('#lblTicket4');

var lblEscritorio1 = $('#lblEscritorio1');
var lblEscritorio2 = $('#lblEscritorio2');
var lblEscritorio3 = $('#lblEscritorio3');
var lblEscritorio4 = $('#lblEscritorio4');

var lbltickets = [lblTicket1,
    lblTicket2,
    lblTicket3,
    lblTicket4
];
var lblesctirorios = [lblEscritorio1,
    lblEscritorio2,
    lblEscritorio3,
    lblEscritorio4
];

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});

socket.on('estadoActual', function(data) {
    actualizaHTML(data.ultimos4);
    // label.text(res.actual);
});



socket.on('ultimos4', function(data) {
    var audio = new Audio('../audio/new-ticket.mp3');
    audio.play();
    actualizaHTML(data.ultimos4);
    // label.text(res.actual);
});


function actualizaHTML(ultimos4) {
    for (var index = 0; index <= ultimos4.length - 1; index++) {
        lbltickets[index].text('tikect ' + ultimos4[index].numero);
        lblesctirorios[index].text('Escritorio ' + ultimos4[index].escritorio);

    }



}