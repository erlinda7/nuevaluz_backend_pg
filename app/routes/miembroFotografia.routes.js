module.exports = app => {
  const miembroFotografiaController = require("../controllers/miembroFotografia.controller");

  // Crear a un nueva  Fotografia del miembro
  app.post("/miembroFotografia", miembroFotografiaController.createMiembroFotografia);

  // Modificar cargo_lider del miembro por id
  app.put("/miembroFotografia/:fotografiaId", miembroFotografiaController.update);

};