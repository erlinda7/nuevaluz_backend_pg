module.exports = app => {
    const ministerioReunionController = require("../controllers/ministerioReunion.controller");
  
    // Create a un nuevo Reunion_ministerio
    app.post("/ministerioReunion", ministerioReunionController.create);
  
    // Modificar Reunion_ministerio por id
    app.put("/ministerioReunion/:ministerioReunionId", ministerioReunionController.update);
  
  }
  