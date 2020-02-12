const sql = require("./db.js");

//constructor
const Ministerio = function (ministerio) {
  this.id_ministerio = ministerio.id_ministerio;
  this.nombre = ministerio.nombre;
  this.descripcion_corta = ministerio.descripcion_corta;
  this.descripcion = ministerio.descripcion;
  this.lugar = ministerio.lugar;
  this.nombre_responsable = ministerio.nombre_responsable;
  this.email = ministerio.email;
  this.telefono = ministerio.telefono;
  this.foto = ministerio.foto;
  this.imagen = ministerio.imagen;
  this.id_iglesia = ministerio.id_iglesia;
}


//guardando en la bd ministerio
Ministerio.create = (nuevoMinisterio, result) => {
  sql.query("INSERT INTO ministerio (nombre, descripcion_corta, descripcion, lugar, nombre_responsable, email, telefono, foto, imagen, id_iglesia) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) returning id_ministerio", 
  [nuevoMinisterio.nombre, nuevoMinisterio.descripcion_corta, nuevoMinisterio.descripcion, nuevoMinisterio.lugar, nuevoMinisterio.nombre_responsable, nuevoMinisterio.email, nuevoMinisterio.telefono, nuevoMinisterio.foto, nuevoMinisterio.imagen, nuevoMinisterio.id_iglesia], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("ministerio creado: ", { id: res.rows[0].id_ministerio, ...nuevoMinisterio });
    result(null, { id: res.rows[0].id_ministerio, ...nuevoMinisterio });
  });
};


//guardando las modificaciones de ministerio en la base de datos
Ministerio.updateById = (id, ministerio, result) => {
  sql.query(
    "UPDATE ministerio SET nombre = $1, descripcion_corta = $2, descripcion = $3, lugar = $4, nombre_responsable = $5, email = $6, telefono = $7, foto = $8, imagen = $9, id_iglesia = $10 WHERE id_ministerio = $11",
    [ministerio.nombre, ministerio.descripcion_corta, ministerio.descripcion, ministerio.lugar, ministerio.nombre_responsable, ministerio.email, ministerio.telefono, ministerio.foto, ministerio.imagen, ministerio.id_iglesia, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log("evento actualizado: ", { id: id, ...ministerio });
      result(null, { id: id, ...ministerio });
    }
  );
};


//para eliminar un evento de la bd
Ministerio.remove = (id, result) => {
  sql.query("DELETE FROM ministerio WHERE id_ministerio = $1", [id], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("ministerio eliminado con id: ", id);
    result(null, res.rows);
  });
};


module.exports = Ministerio;