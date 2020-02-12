const sql = require("./db.js");

//constructor
const Liderazgo = function (liderazgo) {
    this.nombre = liderazgo.nombre;
    this.apellido_paterno = liderazgo.apellido_paterno;
    this.nombre_cargo = liderazgo.nombre_cargo;
    this.foto = liderazgo.foto;
}


Liderazgo.getAll = resultado => {       
    sql.query(
        "SELECT m.nombre, m.apellido_paterno, f.foto, c.nombre_cargo "+
        "FROM miembro m, fotografia f, cargo_lider c, gestion_cargo g "+
        "WHERE  m.id_miembro=f.id_miembro AND "+
        "c.id_cargo_lider = m.id_cargo_lider AND "+
        "m.id_miembro=g.id_miembro AND "+
        //getion actual hasta menor igual fecha_fin
        "extract(year from now())<= extract(year from g.fecha_fin)"
        ,
        (err, res) => {
            if (err) {
                console.log("Error al recuperar", err);
                resultado(null, err); 
                return;
            }
            console.log("directorio:", res.rows);
            resultado(null, res.rows);   

        })


}


module.exports = Liderazgo;