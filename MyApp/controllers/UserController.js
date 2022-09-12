const db = require('../database/index');

const UserController = {
    login: function (req,res) {
        res.render ('login')
    },

    autenticar: function (req,res) {
        const usuario = req.body.usuario;
        const contrasena = req.body.contrasena;
    },

    registracion: function (req,res) {
        res.render ('registracion')
    },

    registrar: function (req,res) {
        db.User.create({
            usuario: req.body.usuario,
            email: req.body.email,
            contrasena: req.body.contrasena,
            dni: req.body.dni,
            foto: 'ss'
        })
        .then(function(){
            res.redirect('/')
        })
        .catch(function(error){
            console.log(error);            
        }) 
    },

    perfil: function (req,res) {
        res.render ('miPerfil')
    },

    editarPerfil: function (req,res) {
        res.render ('editarPerfil')
    },

    detalle: function (req,res) {
        res.render ('detalleUsuario')
    },

    buscar: function (req,res) {
        res.render ('resultadoBusqueda')
    }
}
module.exports = UserController