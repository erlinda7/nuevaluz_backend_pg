module.exports = app => {
  const autenticarController = require("../controllers/autenticar.controller");

  
  app.post("/autenticar", autenticarController.autenticar);
};