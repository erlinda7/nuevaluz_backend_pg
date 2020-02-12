const jwt = require('jsonwebtoken');
const llaveConfig = require("../config/llave.config");


var verificarToken  = function(req, res, next)  {
    const token = req.headers['access-token'];

    if (token) {
        jwt.verify(token, llaveConfig.llave, (err, decoded) => {
            if (err) {
                return res.json({ mensaje: 'Token inválida' });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.send({
            mensaje: 'Token no proveída.'
        });
    }
};

module.exports = verificarToken;