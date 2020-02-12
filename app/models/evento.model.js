const sql = require("./db.js");

//constructor
const Evento = function (evento) {
  this.id_evento = evento.id_evento;
  this.titulo = evento.titulo;
  this.descripcion = evento.descripcion;
  this.lugar = evento.lugar;
  this.fecha = evento.fecha;
  this.imagen = evento.imagen;
  this.id_iglesia = evento.id_iglesia;
}


Evento.getAll = resultado => {
  sql.query("SELECT id_evento, titulo, descripcion, lugar,  to_char(fecha,'DD-MM-YYYY') fecha, imagen FROM evento", (err, res) => {
    if (err) {
      console.log("Error al recuperar", err);
      resultado(null, err);
      return;
    }
    console.log("evento:", res.rows);
    resultado(null, res.rows);

  })


}

//guardando en la bd evento
Evento.create = (nuevoEvento, result) => {
  sql.query("INSERT INTO evento (titulo, descripcion, lugar, fecha, imagen, id_iglesia ) VALUES ($1, $2, $3, $4, $5, $6) returning id_evento", 
  [nuevoEvento.titulo, nuevoEvento.descripcion, nuevoEvento.lugar, nuevoEvento.fecha, nuevoEvento.imagen, nuevoEvento.id_iglesia], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("evento creado: ", { id: res.rows[0].id_evento, ...nuevoEvento });
    result(null, {  id: res.rows[0].id_evento, ...nuevoEvento });
  });
};


//guradando las modificaciones de evento en la base de datos
Evento.updateById = (id, evento, result) => {
  //console.log(id,"id llegando");

  sql.query(
    "UPDATE evento SET titulo = $1, descripcion = $2, lugar = $3, fecha= $4, imagen = $5, id_iglesia = $6 WHERE id_evento = $7",
    [evento.titulo, evento.descripcion, evento.lugar, evento.fecha, evento.imagen, evento.id_iglesia, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log("evento actualizado: ", { id: id, ...evento });
      result(null, { id: id, ...evento });
    }
  );
};

//para eliminar un evento de la bd
Evento.remove = (id, result) => {
  sql.query("DELETE FROM evento WHERE id_evento = $1", [id], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("evento eliminado con id: ", id);
    result(null, res.rows);
  });
};



module.exports = Evento;