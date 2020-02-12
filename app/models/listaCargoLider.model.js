const sql = require("./db.js");

//constructor
const ListaCargoLider = function (listaCargoLider) {
  this.id_cargo_lider = listaCargoLider.id_cargo_lider;
  this.nombre_cargo = listaCargoLider.nombre_cargo;
}

ListaCargoLider.getAll = resultado => {
  sql.query("SELECT * FROM cargo_lider", (err, res) => {
      if (err) {
        console.log("Error al recuperar", err);
        resultado(null, err);
        return;
      }
     // console.log("cargo_lider:", res.rows);
      resultado(null, res.rows);

    })


}


module.exports = ListaCargoLider;