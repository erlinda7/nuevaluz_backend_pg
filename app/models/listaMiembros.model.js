const sql = require("./db.js");

//constructor
const ListaMiembros = function (listamiembros) {
  this.id_miembro = listamiembros.id_miembro;
  this.nombre = listamiembros.nombre;
  this.apellido_paterno = listamiembros.apellido_paterno;
  this.apellido_materno = listamiembros.apellido_materno;
  this.telefono = listamiembros.telefono;
  this.estado_civil = listamiembros.estado_civil;
  this.fecha_nac = listamiembros.fecha_nac;
  this.fecha_conversion = listamiembros.fecha_conversion;
  this.iglesia_conversion = listamiembros.iglesia_conversion;
  this.fecha_bautizo = listamiembros.fecha_bautizo;
  this.iglesia_bautizo = listamiembros.iglesia_bautizo;
  this.nom_completo_pastor_bautizo = listamiembros.nom_completo_pastor_bautizo;
  this.id_fotografia =listamiembros.id_fotografia;
  this.foto = listamiembros.foto;
  this.id_cargo_lider = listamiembros.id_cargo_lider;
  this.nombre_cargo = listamiembros.nombre_cargo;
  this.id_gestion_cargo = listamiembros.id_gestion_cargo;
  this.fecha_inicio = listamiembros.fecha_inicio;
  this.fecha_fin = listamiembros.fecha_fin;
}

ListaMiembros.getAll = resultado => {
  sql.query(
    "SELECT m.id_miembro, m.nombre, m.apellido_paterno, m.apellido_materno, m.telefono, m.estado_civil,  " +
    "to_char(m.fecha_nac,'YYYY-MM-DD') fecha_nac, " +
    "to_char(m.fecha_conversion, 'YYYY-MM-DD') fecha_conversion, m.iglesia_conversion, " +
    "to_char(m.fecha_bautizo,'YYYY-MM-DD') fecha_bautizo, m.iglesia_bautizo, " +
    "m.nom_completo_pastor_bautizo, " +

    "f.id_fotografia, f.foto, " +

    "c.id_cargo_lider, c.nombre_cargo, " +

    "g.id_gestion_cargo, to_char(g.fecha_inicio,'YYYY-MM-DD')  fecha_inicio, to_char(g.fecha_fin,'YYYY-MM-DD')  fecha_fin " +


    "FROM miembro m " +
    "LEFT JOIN fotografia f ON m.id_miembro=f.id_miembro " +
    "LEFT JOIN cargo_lider c ON c.id_cargo_lider = m.id_cargo_lider " +
    "LEFT JOIN gestion_cargo g ON m.id_miembro=g.id_miembro " +
    "ORDER BY m.id_miembro ASC"

    , (err, res) => {
      if (err) {
        console.log("Error al recuperar", err);
        resultado(null, err);
        return;
      }
      //console.log("miembros:", res.rows);
      resultado(null, res.rows);

    })


}


module.exports = ListaMiembros;