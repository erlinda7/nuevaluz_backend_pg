const pruebaRutaProtegidaModel =  require("../models/pruebaRutaProtegida.model");


exports.findAll = (req, res) =>{
    pruebaRutaProtegidaModel.getAll((err, data) =>{
        if(err){
            res.status(500).send({
                message:
                    err.message || "Ha ocurrido un error mientras recuperaba prueba"
            });
        }else{
            res.send(data);
        }
    })
}