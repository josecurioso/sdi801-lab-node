// Módulos
var express = require('express');
var app = express();

// Variables
app.set('port', 8081);

require("./routes/rusuarios.js")(app); // Se utilizan como funciones
require("./routes/rcanciones.js")(app);

// lanzar el servidor
app.listen(app.get('port'), function () {
    console.log("Servidor activo");
});
