let http = require('http');  //Importo o llamo a un paquete

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end('¡Hola Mundo!');
}).listen(8080, () => {
    console.log('Servidor en http://localhost:8080');
});   // Recibe una función callback / Levante servidor en http://localhost:8080



