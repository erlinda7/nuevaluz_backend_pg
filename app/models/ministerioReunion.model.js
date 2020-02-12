const sql = require("./db.js");

//constructor
const MinisterioReunion = function (ministerioReunion) {
  this.id_reunion_ministerio = ministerioReunion.id_reunion_ministerio;
  this.dia = ministerioReunion.dia;
  this.hora_inicio = ministerioReunion.hora_inicio;
  this.hora_fin = ministerioReunion.hora_fin;
  this.id_ministerio = ministerioReunion.id_ministerio;

}


//guardando en la bd ministerio
MinisterioReunion.create = (nuevoMinisterioReunion, result) => {
  sql.query("INSERT INTO reunion_ministerio (dia, hora_inicio, hora_fin, id_ministerio) VALUES ($1, $2, $3, $4)  returning id_reunion_ministerio",
  [nuevoMinisterioReunion.dia, nuevoMinisterioReunion.hora_inicio, nuevoMinisterioReunion.hora_fin, nuevoMinisterioReunion.id_ministerio], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Reunion ministerio creado: ", { id: res.rows[0].id_reunion_ministerio, ...nuevoMinisterioReunion });
    result(null, { id: res.rows[0].id_reunion_ministerio, ...nuevoMinisterioReunion });
  });
};


//guardando las modificaciones de ministerio en la base de datos
MinisterioReunion.updateById = (id, ministerioReunion, result) => {
  sql.query(
    "UPDATE reunion_ministerio SET dia = $1, hora_inicio = $2, hora_fin = $3, id_ministerio = $4 WHERE id_reunion_ministerio = $5",
    [ministerioReunion.dia, ministerioReunion.hora_inicio, ministerioReunion.hora_fin, ministerioReunion.id_ministerio, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }


      console.log("reunion ministerio actualizado: ", { id: id, ...ministerioReunion });
      result(null, { id: id, ...ministerioReunion });
    }
  );
};



module.exports = MinisterioReunion;