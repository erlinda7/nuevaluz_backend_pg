module.exports = app => {
  const eventoController = require("../controllers/evento.controller");


  app.get("/evento", eventoController.findAll);

  // Create a un nuevo evento
  app.post("/evento", eventoController.create);

  // Modificar evento por id
  app.put("/evento/:eventoId", eventoController.update);

  // Eliminar un evento por eventoId
  app.delete("/evento/:eventoId", eventoController.delete);
}
