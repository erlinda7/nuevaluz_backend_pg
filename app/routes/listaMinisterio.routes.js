module.exports = app => {
    const ListaMinisteriosController = require("../controllers/listaMinisterio.controller");


    app.get("/listaMinisterios", ListaMinisteriosController.findAll);

};