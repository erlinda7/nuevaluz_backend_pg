const sql = require("./db.js");

//constructor
const Iglesia = function (iglesia) {
  this.nombre = iglesia.nombre;
  this.direccion = iglesia.direccion;
  this.telefono = iglesia.telefono;
  this.email = iglesia.email;
}

//recuperar iglesia de la base de datos
Iglesia.getAll = resultado => {         //Iglesia es como una clase objeto a ese le añade un metodo getAll
  sql.query("SELECT * FROM iglesia", (err, res) => {
    if (err) {
      console.log("Error al recuperar", err);
      resultado(null, err); //devuelve hasta el controlador
      return;
    }
    console.log("iglesia: ", res);
    resultado(null, res);   //devuelve hasta el controlador
    
  })

  
}


module.exports = Iglesia;