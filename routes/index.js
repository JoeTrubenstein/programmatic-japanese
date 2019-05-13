var express = require('express');
var router = express.Router();

var vocabPusher =  require('../routes/users/utils/vocabPusher')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET api page. */
router.get('/api', function(req, res, next) {
  res.render('API', { title: 'Express' });
});

/* GET api page. */
router.get('/vocab', function(req, res, next) {
  res.render('vocab', { title: 'Express' });
});

/* add vocab word to a user */
router.post('/vocab/addword', vocabPusher.pushVocab)

module.exports = router;
