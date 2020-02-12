const iglesiaModel =  require("../models/iglesia.model.js");

//recuperar la iglesia de la base de datos
exports.findAll = (req, res) =>{
    iglesiaModel.getAll((err, data) =>{
        if(err){
            res.status(500).send({
                message:
                    err.message || "Ha ocurrido un error mientras recuperaba iglesia"
            });
        }else{
            res.send(data);
        }
    })
}