module.exports = app => {
    const ListaMiembrosController = require("../controllers/listaMiembros.controller");
  
  
    app.get("/listaMiembros", ListaMiembrosController.findAll);
    
  };