const { io } = require('../server');

io.on('connection', (client) => {
    console.log('usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a la Aplicacion'
    });
    client.on('disconect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar Cliente

    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje',data);

        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'TODO BIEN'
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO MAL !!!'
        //     });

        // }
    });


});