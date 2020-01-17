// Servidor Web Estático
let express = require('express');

let app = express();

app.use(express.static('public')); //Expone la carpeta public para que pudan hacer peticiones

app.get('/', (req, resp) => {
    resp.status(200).sendFile(__dirname + '/public/index.html');
}); // Lo que hace cuando se hacen peticiones con get


app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
})