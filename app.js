//Fista en Hest

var net = require('net');
 
// connect to socket
var conn = net.createConnection('/tmp/TelldusEvents');

conn.setEncoding('utf-8');
 
//Eventlistener on connection
conn.on('connect' , function () {
        console.log("Connected");
});
 
//Eventlistener on data recieved
conn.on('data', function(data) {
        //Log the data to the console
        console.log(data);
});
