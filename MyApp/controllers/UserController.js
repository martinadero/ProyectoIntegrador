let datapost = require('../data/posteos')
const PostController = {
    index: function (req,res,next) {
        res.render ('index',{
            data: datapost
        })
    }
}
module.exports = PostController