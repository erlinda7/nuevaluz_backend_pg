const listaCargoLiderModel = require("../models/listaCargoLider.model");


exports.findAll = (req, res) => {
  listaCargoLiderModel.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Ha ocurrido un error mientras recuperaba lista de cargos"
      });
    } else {
      res.send(data);
    }
  })
}