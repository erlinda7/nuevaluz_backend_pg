const sql = require("./db.js");

//constructor
const ListaMinisterio = function (ministerio) {
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
    this.id_reunion_ministerio =ministerio.id_reunion_ministerio;
    this.dia = ministerio.dia;
    this.hora_inicio = ministerio.hora_inicio;
    this.hora_fin = ministerio.hora.fin;
  }

ListaMinisterio.getAll = resultado => {
  sql.query(
    "SELECT m.id_ministerio, m.nombre, m.descripcion_corta, m.descripcion, " +
    "m.lugar, m.nombre_responsable, m.email, m.telefono, m.foto, m.imagen, m.id_iglesia, " +

    "rm.id_reunion_ministerio, rm.dia, rm.hora_inicio, rm.hora_fin " +

    "FROM ministerio m, reunion_ministerio rm " +

    "WHERE m.id_ministerio = rm.id_ministerio "

    , (err, res) => {
      if (err) {
        console.log("Error al recuperar", err);
        resultado(null, err);
        return;
      }
      console.log("ministerios:", res.rows);
      resultado(null, res.rows);

    })


}


module.exports = ListaMinisterio;