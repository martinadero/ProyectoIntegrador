var express = require('express');
var router = express.Router();
var PostController = require('../controllers/PostController')
/* GET home page. */
router.get('/',PostController.index)

module.exports = router;
