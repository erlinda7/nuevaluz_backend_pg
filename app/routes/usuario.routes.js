module.exports = app => {
    const usuarioController = require("../controllers/usuario.controller");
  
  
    app.get("/usuario/:usuarioId", usuarioController.findOne);
  
    // Create a un nuevo usuario
    app.post("/usuario", usuarioController.create);
   
    // Eliminar un usuario por usuarioId
    app.delete("/usuario/:usuarioId", usuarioController.delete);
  }
  