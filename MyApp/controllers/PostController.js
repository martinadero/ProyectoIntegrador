let datapost = require('../data/posteos')

const PostController = {

    agregar: function (req,res,next) {
        res.render ('agregarPost')
    },

    index: function (req,res,next) {
        res.render ('index',{
            data: datapost,
            title: 'Home',
            usuario: 'jperez'
        })
    },

    detalle: function (req,res,next) {
        res.render ('detallePost')
    }
}
module.exports = PostController