module.exports = app => {
    const iglesiaController = require("../controllers/iglesia.controller.js"); 

    //rutas para iglesia


    //recuperar todas las iglesias get
    app.get("/iglesia", iglesiaController.findAll); //va al metodo en controller (manda - req, res)




    //recuperar la iglesia por - id get:id



    //modificar iglesia por id - put


    //crear iglesia - post


    //eliminar iglesia por id - delete:id



    //eliminar toda la iglesia - delete



};