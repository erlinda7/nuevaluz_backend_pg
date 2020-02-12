const ministerioReunionModel = require("../models/ministerioReunion.model");


//-------para crear y guardar nuevo REunion  ministerio
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "El contenido del body no puede ser vacio!!"
    });
  }

  // Crear un Reunion Ministerio
  const ministerioReunion = new ministerioReunionModel({
    dia: req.body.dia,
    hora_inicio: req.body.hora_inicio,
    hora_fin: req.body.hora_fin,
    id_ministerio: req.body.id_ministerio,
  });

  // guardar Reunion ministerio en la base de datos
  ministerioReunionModel.create(ministerioReunion, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Ha ocurrido un error al guardar el reunion ministerio"
      });
    else res.send(data);
  });
};


//------para modificar y guardar un Reunion Ministerio por id
exports.update = (req, res) => {
  // Validate Request
  console.log("req: ", req.body);

  if (!req.body) {
    res.status(400).send({
      message: "El contenido del body no puede ser vacio!!"
    });
  }

  ministerioReunionModel.updateById(
    req.params.ministerioReunionId,
    new ministerioReunionModel(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "no_encontrado") {
          res.status(404).send({
            message: `Reunion Ministerio no encontrado con id ${req.params.ministerioReunionId}.`
          });
        } else {
          res.status(500).send({
            message: "Error actualizando reunion ministerio con id" + req.params.ministerioReunionId
          });
        }
      } else res.status(200).json(data);
    }
  );
};





