var verificarTokenMiddleware = require('../middlewares/verificarToken.middleware');
module.exports = app => {
    const pruebaRutaProtegidaController = require("../controllers/pruebaRutaProtegida.controller"); 


    app.get("/rutaProtegida",verificarTokenMiddleware, pruebaRutaProtegidaController.findAll);
};