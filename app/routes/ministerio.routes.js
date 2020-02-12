module.exports = app => {
  const ministerioController = require("../controllers/ministerio.controller");

  // Create a un nuevo ministerio
  app.post("/ministerio", ministerioController.create);

  // Modificar ministerio por id
  app.put("/ministerio/:ministerioId", ministerioController.update);

  // Eliminar un ministerio por ministerioId
  app.delete("/ministerio/:ministerioId", ministerioController.delete);

}
