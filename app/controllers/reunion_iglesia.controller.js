const reunionIglesiaModel= require('../models/reunion_iglesia.model.js');

//recuperar la reunion_iglesia de la base de datos
exports.findAll = (req, res) =>{
    reunionIglesiaModel.getAll((err, data) =>{
        if(err){
            res.status(500).send({
                message:
                    err.message || "Ha ocurrido un error mientras recuperaba reunion_iglesia"
            });
        }else{
            res.send(data);
        }
    })
}