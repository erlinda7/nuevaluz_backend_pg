const autenticarModel = require("../models/autenticar.model");
const express = require("express");
const jwt = require('jsonwebtoken');
const llaveConfig = require("../config/llave.config");
const app = express();

app.set('llave', llaveConfig.llave);


exports.autenticar = (req, res) => {

  if (!req.body) {
    res.status(400).send({
      message: "El contenido no puede ser vacio!"
    });
  }


  ///---------
  autenticarModel.getUsuario(req.body.nombre_user, (err, data) => {
    if (err) {
      res.status(404).json({
        mensaje: 'false'
      });

    } else {
      //console.log(data);
      if (req.body.nombre_user == data.nombre_user && req.body.contrasenia == data.contrasenia) {
        const payload = {
          check: true
        };
        const token = jwt.sign(payload, app.get('llave'), {
          expiresIn: 1440
        });
        res.json({
          id_usuario: data.id_usuario,
          mensaje: 'true',
          token: token
        });

      } else {
        res.json({ mensaje: 'false' })
      }

    }
  });

};


