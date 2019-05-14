var express = require('express');
var router = express.Router();

var vocabPusher =  require('../routes/users/utils/vocabPusher')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sushi Script', subtitle: 'Learning Japanese with Javascript' });
});

/* GET api page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});
router.get('/flash-card', function(req, res, next) {
  res.render('flash-card', { title: 'Sushi Script'});
});

/* GET api page. */
router.get('/vocab', function(req, res, next) {
  res.render('vocab', { title: 'Express' });
});

/* add vocab word to a user */
router.post('/vocab/addword', vocabPusher.pushVocab)

module.exports = router;
