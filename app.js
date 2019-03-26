// Módulos
var express = require('express');
var app = express();

var expressSession = require('express-session');
app.use(expressSession({
    secret: 'abcdefg',
    resave: true,
    saveUninitialized: true
}));
var crypto = require('crypto');

var fileUpload = require('express-fileupload');
app.use(fileUpload());
var mongo = require('mongodb');
var swig = require('swig');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var gestorBD = require('./modules/gestorBD.js');
gestorBD.init(app, mongo);

app.use(express.static('public'));

// Variables
app.set('port', 8081);
app.set('db', 'mongodb://admin:talisman@tiendamusica-shard-00-00-hct1g.mongodb.net:27017,tiendamusica-shard-00-01-hct1g.mongodb.net:27017,tiendamusica-shard-00-02-hct1g.mongodb.net:27017/test?ssl=true&replicaSet=tiendamusica-shard-0&authSource=admin&retryWrites=true');
app.set('clave','abcdefg');
app.set('crypto', crypto);

require("./routes/rusuarios.js")(app, swig, gestorBD); // Se utilizan como funciones
require("./routes/rcanciones.js")(app, swig, gestorBD);

// lanzar el servidor
app.listen(app.get('port'), function () {
    console.log("Servidor activo");
});
