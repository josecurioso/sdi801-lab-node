// Módulos
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('public'));

// Variables
app.set('port', 8081);

require("./routes/rusuarios.js")(app); // Se utilizan como funciones
require("./routes/rcanciones.js")(app);

// lanzar el servidor
app.listen(app.get('port'), function () {
    console.log("Servidor activo");
});
