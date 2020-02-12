const miembroFotografiaModel = require("../models/miembroFotografia.model");
const miembroModel = require ("../models/miembro.model")

//para crear y guardar miembro anciano
exports.createMiembroFotografia = (req, res) => {

  //-----------------------------------------------------------------------------------
 //console.log("mostrando si funciona !!!!:", miembroModel.);
 

  //-----------------------------------------------------------------------------------



  if (!req.body) {
    res.status(400).send({
      message: "El contenido del body no puede ser vacio!"
    });
  }

  // Crear una miembro anciano
  const miembroFotografia = new miembroFotografiaModel({
    foto: req.body.foto,
    id_miembro: req.body.id_miembro
  });

  // guardar miembro anciano en la base de datos
  miembroFotografiaModel.createMiembroFotografia(miembroFotografia, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Ha ocurrido un error al guardar la fotografia"
      });
    else res.send(data);
  });
};

//para modificar y guardar una fotografia por id
exports.update = (req, res) => {
  console.log("req: ", req.body);

  if (!req.body) {
    res.status(400).send({
      message: "El contenido del body no puede ser vacio!"
    });
  }

  miembroFotografiaModel.updateById(
    req.params.fotografiaId,
    new miembroFotografiaModel(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "no_encontrado") {
          res.status(404).send({
            message: `fotografia no encontrado con id ${req.params.fotografiaId}.`
          });
        } else {
          res.status(500).send({
            message: "Error actualizando fotografia con id" + req.params.fotografiaId
          });
        }
      } else res.status(200).json(data);
    }
  );
};
