var express = require('express');
var router = express.Router();
var userController = require('./controllers/userController');
var passport = require('passport');

var signupValidation = require('./utils/signupValidation');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/signup', function(req, res, next) {
  res.render('signup');
})

router.post('/signup', signupValidation, function(req, res) {

  var errorValidate = req.validationErrors();

  if (errorValidate) {
    res.send({error_msg: true, errorValidate: errorValidate, errors: []})
    return;
  }
  else {

    userController.signup(req.body)
                  .then( user => {
                    res.json({
                      confirmation: 'success',
                      response: user
                    })
                  })
                  .catch( error => {
                    res.json({
                      confirmation: 'failure',
                      response: error
                    })
                  })
  }
})

router.get('/signin', function(req, res) {
  res.send('sign-in page')
})

router.post('/signin', passport.authenticate('local-login', {
  successRedirect: '/',
  failureRedirect: '/api/users/signin',
  failureFlash: true
}))

module.exports = router;
