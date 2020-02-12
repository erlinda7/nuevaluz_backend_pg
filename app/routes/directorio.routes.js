module.exports = app => {
    const directorioController = require("../controllers/directorio.controller"); 


    app.get("/directorio", directorioController.findAll);
};