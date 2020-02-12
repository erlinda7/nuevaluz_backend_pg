const sql = require("./db.js");

//constructor
const Miembro = function (miembro) {
  this.id_miembro = miembro.id_miembro;
  this.nombre = miembro.nombre;
  this.apellido_paterno = miembro.apellido_paterno;
  this.apellido_materno = miembro.apellido_materno;
  this.telefono = miembro.telefono;
  this.estado_civil = miembro.estado_civil;
  this.fecha_nac = miembro.fecha_nac;
  this.fecha_conversion = miembro.fecha_conversion;
  this.iglesia_conversion = miembro.iglesia_conversion;
  this.fecha_bautizo = miembro.fecha_bautizo;
  this.iglesia_bautizo = miembro.iglesia_bautizo;
  this.nom_completo_pastor_bautizo = miembro.nom_completo_pastor_bautizo;
  this.id_cargo_lider = miembro.id_cargo_lider;
}


//guardando en la bd miembro en la tabla miembro
Miembro.createMiembro = (nuevoMiembro, result) => {
  sql.query("INSERT INTO miembro (nombre, apellido_paterno, apellido_materno, telefono, estado_civil, fecha_nac, fecha_conversion, iglesia_conversion, fecha_bautizo, iglesia_bautizo, nom_completo_pastor_bautizo, id_cargo_lider) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) returning id_miembro ", 
  [nuevoMiembro.nombre, nuevoMiembro.apellido_paterno, nuevoMiembro.apellido_materno, nuevoMiembro.telefono, nuevoMiembro.estado_civil, nuevoMiembro.fecha_nac, nuevoMiembro.fecha_conversion, nuevoMiembro.iglesia_conversion, nuevoMiembro.fecha_bautizo, nuevoMiembro.iglesia_bautizo, nuevoMiembro.nom_completo_pastor_bautizo, nuevoMiembro.id_cargo_lider], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("miembro creado : ", { id: res.rows[0].id_miembro, ...nuevoMiembro });
    result(null, { id: res.rows[0].id_miembro, ...nuevoMiembro });
  });



};


//guradando las modificaciones de miembro en la base de datos
Miembro.updateById = (id, miembro, result) => {
  sql.query(
    "UPDATE miembro SET nombre = $1, apellido_paterno = $2, apellido_materno = $3, " +
    "telefono= $4, estado_civil = $5, fecha_nac = $6, fecha_conversion = $7, iglesia_conversion = $8, " +
    "fecha_bautizo = $9, iglesia_bautizo = $10, nom_completo_pastor_bautizo = $11, id_cargo_lider = $12 WHERE id_miembro = $13",
    [miembro.nombre, miembro.apellido_paterno, miembro.apellido_materno,
    miembro.telefono, miembro.estado_civil, miembro.fecha_nac, miembro.fecha_conversion,
    miembro.iglesia_conversion, miembro.fecha_bautizo, miembro.iglesia_bautizo, miembro.nom_completo_pastor_bautizo, miembro.id_cargo_lider, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }


      console.log("miembro actualizado: ", { id: id, ...miembro });
      result(null, { id: id, ...miembro });
    }
  );
};

//para eliminar un miembro de la bd
Miembro.remove = (id, result) => {
  sql.query("DELETE FROM miembro WHERE id_miembro = $1", [id], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }


    console.log("miembro eliminado con id: ", id);
    result(null, res.rows);
  });
};


module.exports = Miembro;