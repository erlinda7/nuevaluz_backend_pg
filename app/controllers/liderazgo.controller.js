const liderazgoModel =  require("../models/liderazgo.model");


exports.findAll = (req, res) =>{
    liderazgoModel.getAll((err, data) =>{
        if(err){
            res.status(500).send({
                message:
                    err.message || "Ha ocurrido un error mientras recuperaba liderazgo"
            });
        }else{
            res.send(data);
        }
    })
}