const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const jwt = require('jsonwebtoken');

const llaveConfig = require("./app/config/llave.config");

const app = express();




//settings
app.set('port', process.env.PORT ||3000);  //si esta definido un puerto que lo tome (jeruko) y sino 3000
app.set('json spaces', 2); 


app.use(bodyParser.json());
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('app'))
//routes para ejemplo si levante
app.get("/", (req, res) => {
    res.json({ message: "Binvenido a la aplicacion rest api nodejs postgresSql" });
});


require("./app/routes/iglesia.routes.js")(app);
require("./app/routes/reunion_iglesia.routes.js")(app);

require("./app/routes/directorio.routes.js")(app);

require("./app/routes/evento.routes.js")(app);

require("./app/routes/listaMinisterio.routes.js")(app); //lista todos los ministerios con reunion_ministerios
//
require("./app/routes/ministerio.routes.js")(app);
require("./app/routes/ministerioReunion.routes.js")(app);

require("./app/routes/liderazgo.routes.js")(app);

require("./app/routes/autenticar.routes.js")(app);


require("./app/routes/listaMiembros.routes.js")(app); // "todos los datos" de los miembros
//
require("./app/routes/miembro.routes.js")(app); //metodos post put delete  miembros
require("./app/routes/miembroGestionCargo.routes")(app);  //gestion_cargo del miembro
require("./app/routes/miembroFotografia.routes")(app);  //fotografia del miembro anciano, pastor
require("./app/routes/listaCargoLider.routes")(app);  //lista de cargos 


//
require("./app/routes/usuario.routes")(app)

//prueba ruta protegida
require("./app/routes/pruebaRutaProtegida.routes.js")(app);



//ruta para subir imagenes
require("./app/routes/subir.routes.js")(app);

//ruta para eliminar imagenes
//require("./app/routes/eliminar.routes.js")(app);

//Starting the server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
    
})