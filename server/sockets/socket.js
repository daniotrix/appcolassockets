const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control');

const ticketcontrol = new TicketControl();


io.on('connection', (client) => {
    client.on('siguienteTicket', (data, callback) => {
        let siguiente = ticketcontrol.siguiente();
        console.log(siguiente);
        callback(siguiente);
    });

    client.emit('estadoActual', {
        actual: ticketcontrol.getUltimo(),
        ultimos4: ticketcontrol.getUltimos4()
    });
    // emit estado actual

    client.on('atenderTicket', (data, callback) => {
        if (!data.escritorio) {
            return callback({
                err: true,
                messaje: 'El escritorio es necesario'
            });
        }


        let atenderTicket = ticketcontrol.atenderTicket(data.escritorio);
        callback(atenderTicket);

        client.broadcast.emit('ultimos4', {
            ultimos4: ticketcontrol.getUltimos4()
        })

    });

});