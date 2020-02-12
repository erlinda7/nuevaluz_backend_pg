module.exports = app => {
    const ListaCargoLiderController = require("../controllers/listaCargoLider.controller");
  
  
    app.get("/listaCargoLider", ListaCargoLiderController.findAll);
    
  };