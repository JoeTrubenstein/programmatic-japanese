var express = require('express');
var router = express.Router();

var consonantController = require('../../controllers/consonantController')

/* GET home page. */
router.get('/:consonant', consonantController.getKana)

module.exports = router;