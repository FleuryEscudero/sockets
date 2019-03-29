
const { io } = require ('../server')

io.on('connection', (client) => {
    console.log('Usuario Conectado');

    client.emit('messageSent',{
       mensaje: 'Bienvenido al chat'
    });

    client.on('disconnect', () => {
        console.log('Este usuario se ha desconectado');
    });

    /**
     * Escuchar el cliente
     */

    client.on('messageSent',(data,callback)=>{
         console.log(data)


         /**
          * brodacast
          */

        client.broadcast.emit('messageSent',data);

        // if (message.nombre) {

        //     callback({
        //         message: 'Todo salio bien'
        //     });
        // } else {
        //     callback({
        //         message: 'No salio bien'
        //     })
        // }
    });

})