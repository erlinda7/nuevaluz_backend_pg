const sql = require("./db.js");

//constructor
const MiembroFotografia = function (miembroFotografia) {
  this.foto = miembroFotografia.foto
  this.id_miembro = miembroFotografia.id_miembro;
}

//guardando en la bd miembro anciano 
MiembroFotografia.createMiembroFotografia = (nuevoMiembroFotografia, result) => {
  sql.query("INSERT INTO fotografia (foto, id_miembro) VALUES ($1, $2) returning  id_fotografia ",
   [nuevoMiembroFotografia.foto, nuevoMiembroFotografia.id_miembro], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("fotografia creado: ", { id: res.rows[0].id_fotografia, ...nuevoMiembroFotografia });
    result(null, { id: res.rows[0].id_fotografia, ...nuevoMiembroFotografia });
  });
};


//guradando las modificaciones de miembro en la base de datos
MiembroFotografia.updateById = (id, miembroFotografia, result) => {
  sql.query(
    "UPDATE fotografia SET foto= $1 WHERE id_fotografia = $2 ", [miembroFotografia.foto, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log("fotografia actualizado: ", { id: id, ...miembroFotografia });
      result(null, { id: id, ...miembroFotografia });
    }
  );
};


module.exports = MiembroFotografia;