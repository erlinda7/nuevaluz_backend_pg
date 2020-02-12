module.exports = app => {
  const reunionIglesiaController = require("../controllers/reunion_iglesia.controller.js");
  //rutas para iglesia


  //recuperar todas las iglesias get
  app.get("/reunion_iglesia", reunionIglesiaController.findAll);
}