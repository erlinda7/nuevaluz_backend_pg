const directorioModel =  require("../models/directorio.model");


exports.findAll = (req, res) =>{
    directorioModel.getAll((err, data) =>{
        if(err){
            res.status(500).send({
                message:
                    err.message || "Ha ocurrido un error mientras recuperaba directorio"
            });
        }else{
            res.send(data);
        }
    })
}