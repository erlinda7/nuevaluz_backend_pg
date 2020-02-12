const sql = require("./db.js");

//constructor
const Usuario = function (usuario) {
  this.id_usuario = usuario.id_usuario;
  this.nombre_user = usuario.nombre_user;
  this.contrasenia = usuario.contrasenia;
}


Usuario.findById = (usuarioId, result) => {
    sql.query(`SELECT  id_usuario, nombre_user FROM usuario WHERE id_usuario > ${usuarioId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.rows.length) {
        console.log("found usuario: ", res.rows);
        result(null, res.rows);
        return;
      }
  
      // not found Customer with the id
      result(null, res.rows);
    });
  };

//guardando en la bd evento
Usuario.create = (nuevoUsuario, result) => {
  //console.log(nuevoUsuario);
  
  sql.query("INSERT INTO usuario (nombre_user, contrasenia) VALUES ($1, $2) returning id_usuario", [nuevoUsuario.nombre_user, nuevoUsuario.contrasenia], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("usuario creado: ", { id: res.rows[0].id_usuario, ...nuevoUsuario });
    result(null, { id: res.rows[0].id_usuario, ...nuevoUsuario });
  });
};



//para eliminar un evento de la bd
Usuario.remove = (id, result) => {
  sql.query("DELETE FROM usuario WHERE id_usuario = $1", [id], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("usuario eliminado con id: ", id);
    result(null, res.rows);
  });
};



module.exports = Usuario;