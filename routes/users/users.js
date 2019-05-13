var express = require('express');
var router = express.Router();
var userController = require('./controllers/userController');
var passport = require('passport');

var signupValidation = require('./utils/signupValidation');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// signup page to create new users
router.get('/register', function(req, res, next) {
  res.render('register', {errors: req.flash("loginMessage")});
})

router.post('/register', signupValidation, function(req, res) {

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

// view the sign in page
router.get("/signin", function(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
  res.render("signin", { errors: req.flash("loginMessage") });
});

// sign in via passport with username and password
router.post('/signin', passport.authenticate('local-login', {
  successRedirect: '/',
  failureRedirect: '/users/signin',
  failureFlash: true
}))

//sign out
router.get("/logout", function(req, res, next) {
  req.logout();
  res.redirect("/");
});

// view and edit profile
router.get('/profile', function(req, res, next) {
  userController.getUserInfo(req.user)
                .then( (user) => {
                  res.render('profile', { user: user })
                })
                .catch( (error) => {
                  res.send(error);
                })
})

// flashcards
router.get('/flashcards', function(req, res, next) {
  userController.getUserInfo(req.user)
                .then( (user) => {
                  res.render('flashcards', { user: user })
                })
                .catch( (error) => {
                  res.send(error);
                })
})

router.post('/update', function(req, res, next) {
  userController.updateProfile(req)
                .then( (user) => {
                  res.render('profile', { user: user })
                })
                .catch( (error) => {
                  res.send(error);
                })
})


module.exports = router;
