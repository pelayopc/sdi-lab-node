// Módulos 
var express = require('express'); 
var app = express(); 
var mongo = require('mongodb'); 
var swig = require("swig")
var bodyParser = require('body-parser'); 
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); 
// Variables 
app.set('port', 8081); 
app.set('db','mongodb://admin:9373375-r@tiendamusica-shard-00-00-k9ldl.mongodb.net:27017,tiendamusica-shard-00-01-k9ldl.mongodb.net:27017,tiendamusica-shard-00-02-k9ldl.mongodb.net:27017/test?ssl=true&replicaSet=tiendamusica-shard-0&authSource=admin&retryWrites=true&w=majority'); 
//Rutas/controladores por lógica 
require("./routes/rusuarios.js")(app, swig);  // (app, param1, param2, etc.) 
require("./routes/rcanciones.js")(app, swig, mongo);  // (app, param1, param2, etc.) 
 
// lanzar el servidor 

app.listen(app.get('port'), function() {  console.log("Servidor activo"); }); 