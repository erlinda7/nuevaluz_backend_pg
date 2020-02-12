const usuarioModel = require("../models/usuario.model");


exports.findOne = (req, res) => {
    usuarioModel.findById(req.params.usuarioId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Usuario with id ${req.params.usuarioId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Usuario with id " + req.params.usuarioId
          });
        }
      } else res.send(data);
    });
  };


//-------para crear y guardar nuevo usuario
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "El contenido del body no puede ser vacio!"
    });
  }

  // Crear un Usuario
  const usuario = new usuarioModel({
    nombre_user: req.body.nombre_user,
    contrasenia: req.body.contrasenia,
  });

  // guardar usuario en la base de datos
  usuarioModel.create(usuario, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Ha ocurrido un error al guardar el usuario"
      });
    else res.send(data);
  });
};



//---para eliminar un usuario por usuarioId
exports.delete = (req, res) => {
  usuarioModel.remove(req.params.usuarioId, (err, data) => {
    if (err) {
      if (err.kind === "no_encontrado") {
        res.status(404).send({
          message: `usuario no encontrado por id ${req.params.usuarioId}.`
        });
      } else {
        res.status(500).send({
          message: "no se pudo eliminar el usuario con id " + req.params.usuarioId
        });
      }
    } else res.send({ message: `Usuario eliminado con exito!` });
  });
};
