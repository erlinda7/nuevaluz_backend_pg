module.exports = app => {
  const miembroGestionCargoController = require("../controllers/miembroGestionCargo.controller");

  // Crear a un nueva  gestion_cargo del miembro
  app.post("/miembroGestionCargo", miembroGestionCargoController.createMiembroGestionCargo);

  // Modificar gestion_cargo del miembro por id
  app.put("/miembroGestionCargo/:gestionCargoId", miembroGestionCargoController.update);

};