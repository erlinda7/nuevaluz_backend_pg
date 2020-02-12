const listaMiembrosModel = require("../models/listaMiembros.model");


exports.findAll = (req, res) => {
  listaMiembrosModel.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Ha ocurrido un error mientras recuperaba todos los datos de los miembros"
      });
    } else {
      res.send(data);
    }
  })
}






