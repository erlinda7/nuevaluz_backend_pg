const miembroModel = require("../models/miembro.model");


//para crear y guardar nuevo miembro
exports.createMiembro = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "El contenido del body no puede ser vacio!"
    });
  }

  // Crear un Miembro
  const miembro = new miembroModel({
    nombre : req.body.nombre,
    apellido_paterno: req.body.apellido_paterno,
    apellido_materno: req.body.apellido_materno,
    telefono: req.body.telefono,
    estado_civil: req.body.estado_civil,
    fecha_nac: req.body.fecha_nac,
    fecha_conversion: req.body.fecha_conversion,
    iglesia_conversion: req.body.iglesia_conversion,
    fecha_bautizo: req.body.fecha_bautizo,
    iglesia_bautizo: req.body.iglesia_bautizo,
    nom_completo_pastor_bautizo: req.body.nom_completo_pastor_bautizo,
    id_cargo_lider: req.body.id_cargo_lider
  });

  // guardar miembro en la base de datos
  miembroModel.createMiembro(miembro, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Ha ocurrido un error al guardar el miembro"
      });
    else res.send(data);
  });
};


//para modificar y guardar un miembro por id
exports.update = (req, res) => {
  console.log("req: ", req.body);

  if (!req.body) {
    res.status(400).send({
      message: "El contenido del body no puede ser vacio!"
    });
  }

  miembroModel.updateById(
    req.params.miembroId,
    new miembroModel(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "no_encontrado") {
          res.status(404).send({
            message: `Miembro no encontrado con id ${req.params.miembroId}.`
          });
        } else {
          res.status(500).send({
            message: "Error actualizando miembro con id" + req.params.miembroId
          });
        }
      } else res.status(200).json(data);
    }
  );
};


//---para eliminar un miembro por miembroId
exports.delete = (req, res) => {
  miembroModel.remove(req.params.miembroId, (err, data) => {
    if (err) {
      if (err.kind === "no_encontrado") {
        res.status(404).send({
          message: `Miembro no encontrado por id ${req.params.miembroId}.`
        });
      } else {
        res.status(500).send({
          message: "no se pudo eliminar el miembro con id " + req.params.miembroId
        });
      }
    } else res.send({ message: `Miembro eliminado con exito!` });
  });
};




