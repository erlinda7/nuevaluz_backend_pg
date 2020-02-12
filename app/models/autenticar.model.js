const sql = require("./db.js");

// constructor
const Usuario = function (usuario) {
  this.id_usuario = usuario.id_usuario;
  this.nombre_user = usuario.nombre_user;
  this.contrasenia = usuario.contrasenia;
};


Usuario.getUsuario = (nombreUsuario, result) => {
  console.log(nombreUsuario, "nombreUSuario");
  
  sql.query(`SELECT * FROM usuario WHERE nombre_user = '${nombreUsuario}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.rows.length) {
      console.log(res.rows[0]);
      
      result(null, res.rows[0]);
      return;
    }
    result({ kind: "no encontrado" }, null);
  });
};

module.exports = Usuario;
