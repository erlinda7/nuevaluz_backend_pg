const ministerioModel = require("../models/ministerio.model");


//-------para crear y guardar nuevo ministerio
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "El contenido del body no puede ser vacio!!"
    });
  }

  // Crear un Ministerio
  const ministerio = new ministerioModel({
    nombre: req.body.nombre,
    descripcion_corta: req.body.descripcion_corta,
    descripcion: req.body.descripcion,
    lugar: req.body.lugar,
    nombre_responsable: req.body.nombre_responsable,
    email: req.body.email,
    telefono: req.body.telefono,
    foto: req.body.foto,
    imagen: req.body.imagen,
    id_iglesia: req.body.id_iglesia
  });

  // guardar evento en la base de datos
  ministerioModel.create(ministerio, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Ha ocurrido un error al guardar el ministerio"
      });
    else res.send(data);
  });
};


//------para modificar y guardar un evento identificando del request el idevento
exports.update = (req, res) => {
  // Validate Request
  console.log("req: ", req.body);

  if (!req.body) {
    res.status(400).send({
      message: "El contenido del body no puede ser vacio!!"
    });
  }

  ministerioModel.updateById(
    req.params.ministerioId,
    new ministerioModel(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "no_encontrado") {
          res.status(404).send({
            message: `Ministerio no encontrado con id ${req.params.ministerioId}.`
          });
        } else {
          res.status(500).send({
            message: "Error actualizando ministerio con id" + req.params.ministerioId
          });
        }
      } else res.status(200).json(data);
    }
  );
};


//---para eliminar un ministerio por ministerioId
exports.delete = (req, res) => {
  ministerioModel.remove(req.params.ministerioId, (err, data) => {
    if (err) {
      if (err.kind === "no_encontrado") {
        res.status(404).send({
          message: `Ministerio no encontrado por id ${req.params.ministerioId}.`
        });
      } else {
        res.status(500).send({
          message: "no se pudo eliminar el ministerio con id " + req.params.ministerioId
        });
      }
    } else res.send({ message: `Ministerio eliminado con exito!` });
  });
};


