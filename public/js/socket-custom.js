
var socket = io();
socket.on('connect', function () {
    console.log('conectado al servidor');
});

//on Escuchar
socket.on('disconnect', function () {
    console.log('Perdimos conexion con el servidor');
});


//emit enviar informacion
socket.emit('enviarMensaje', { usuario: 'Angel', mensaje: 'Hola q tal' }, function (resp) {
    console.log('Respuesta del Server: ' + resp.resp);
});
// escuchar informacion
socket.on('enviarMensaje', function (mensaje) {
    console.log('Servidor : '+mensaje.usuario+' : Dice - ' + mensaje.mensaje);
});

