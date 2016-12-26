var net = require('net');

var server = net.createServer(function(socket ){
    socket.write('Echo Server\n');
    socket.pipe(socket);
});

server.listen(8580,'127.0.0.1');