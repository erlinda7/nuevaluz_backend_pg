module.exports = app => {
    const liderazgoController = require("../controllers/liderazgo.controller"); 


    app.get("/liderazgo", liderazgoController.findAll);
};