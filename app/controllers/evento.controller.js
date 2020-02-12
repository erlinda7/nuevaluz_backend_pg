const eventoModel = require("../models/evento.model");


exports.findAll = (req, res) => {
  eventoModel.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Ha ocurrido un error mientras recuperaba evento"
      });
    } else {
      res.send(data);
    }
  })
}


//-------para crear y guardar nuevo evento
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "El contenido del body no puede ser vacio!"
    });
  }

  // Crear un Evento
  const evento = new eventoModel({
    titulo: req.body.titulo,
    descripcion: req.body.descripcion,
    lugar: req.body.lugar,
    fecha: req.body.fecha,
    imagen: req.body.imagen,
    id_iglesia: req.body.id_iglesia
  });

  // guardar evento en la base de datos
  eventoModel.create(evento, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Ha ocurrido un error al guardar el evento"
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
      message: "El contenido del body no puede ser vacio!"
    });
  }

  eventoModel.updateById(
    req.params.eventoId,
    new eventoModel(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "no_encontrado") {
          res.status(404).send({
            message: `Evento no encontrado con id ${req.params.eventoId}.`
          });
        } else {
          res.status(500).send({
            message: "Error actualizando evento con id" + req.params.eventoId
          });
        }
      } else res.status(200).json(data);
    }
  );
};


//---para eliminar un evento por eventoId
exports.delete = (req, res) => {
  eventoModel.remove(req.params.eventoId, (err, data) => {
    if (err) {
      if (err.kind === "no_encontrado") {
        res.status(404).send({
          message: `Evento no encontrado por id ${req.params.eventoId}.`
        });
      } else {
        res.status(500).send({
          message: "no se pudo eliminar el evento con id " + req.params.eventoId
        });
      }
    } else res.send({ message: `Evento eliminado con exito!` });
  });
};
