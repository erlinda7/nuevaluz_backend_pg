const sql = require("./db.js");

//constructor
const Directorio = function (directorio) {
    this.nombre = directorio.nombre;
    this.apellido_paterno = directorio.apellido_paterno;
    this.nombre_cargo = directorio.nombre_cargo;

}


Directorio.getAll = resultado => {       
    sql.query("SELECT m.nombre, m.apellido_paterno, c.nombre_cargo "+
    "FROM miembro m, cargo_lider c, gestion_cargo g  "+
    "WHERE  c.id_cargo_lider = m.id_cargo_lider AND m.id_miembro = g.id_miembro "+
    "AND (c.nombre_cargo = 'Pastor' OR c.nombre_cargo = 'Anciano' OR c.nombre_cargo = 'Diacono'  "+
    "OR c.nombre_cargo = 'Diaconiza' OR c.nombre_cargo = 'Tesorero' OR c.nombre_cargo = 'Secretario' OR c.nombre_cargo = 'Superintendente') "+
    
    "AND extract(year from now())<= extract(year from g.fecha_fin) ",
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


module.exports = Directorio;