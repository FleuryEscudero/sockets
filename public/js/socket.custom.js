var socket = io();
        /**
         * Escuchar 
         */
        socket.on('connect', () => {
            console.log('Conectado al servidor');
        })


        socket.on('disconnect', () => {
            console.log('Perdimos conexion con el servidor');
        });

        /**
         * emitir informacion
         * */
        socket.emit('messageSent', {
            nombre: 'fleury',
            message: 'Hola Mundo'
        },(res)=>{
            console.log('Respuesta del Server: ', res);
        });

        /**
         * escuchar informacion
         */

        socket.on('messageSent', (message) => {
            console.log(message);
            


        })