const sql = require("./db.js");

//constructor
const MiembroGestionCargo = function (miembroGestionCargo) {
    this.fecha_inicio = miembroGestionCargo.fecha_inicio
    this.fecha_fin = miembroGestionCargo.fecha_fin
    this.id_miembro = miembroGestionCargo.id_miembro;
}

//guardando en la bd gestion_cargo del miembro 
MiembroGestionCargo.createMiembroGestionCargo= (nuevoMiembroGestionCargo, result) => {
    sql.query("INSERT INTO gestion_cargo (fecha_inicio, fecha_fin, id_miembro) VALUES ($1, $2, $3) returning id_gestion_cargo", 
    [nuevoMiembroGestionCargo.fecha_inicio, nuevoMiembroGestionCargo.fecha_fin, nuevoMiembroGestionCargo.id_miembro], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("gestion_cargo creado: ", { id: res.rows[0].id_gestion_cargo, ...nuevoMiembroGestionCargo });
      result(null, { id: res.rows[0].id_gestion_cargo, ...nuevoMiembroGestionCargo });
    });
  };
  
  
  //guradando las modificaciones de miembro en la base de datos
MiembroGestionCargo.updateById = (id, miembroGestionCargo, result) => {
  sql.query(
    "UPDATE gestion_cargo SET fecha_inicio = $1, fecha_fin = $2 WHERE id_gestion_cargo = $3 ", 
    [ miembroGestionCargo.fecha_inicio, miembroGestionCargo.fecha_fin, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      
      console.log("gestion_cargo actualizado: ", { id: id, ...miembroGestionCargo });
      result(null, { id: id, ...miembroGestionCargo });
    }
  );
};

  module.exports = MiembroGestionCargo;