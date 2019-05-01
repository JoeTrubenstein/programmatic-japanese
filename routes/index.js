var express = require('express');
var router = express.Router();

const User = require('./users/models/User');


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

router.post('/vocab/addword', function(req, res) {

  let cipher = {
    あ: "a",
    い: "i",
    う: "u",
    え: "e",
    お: "o",
    か: "ka",
    き: "ki",
    く: "ku",
    け: "ke",
    こ: "ko",
    さ: "sa",
    し: "shi",
    す: "su",
    せ: "se",
    そ: "so",
    た: "ta",
    ち: "chi",
    つ: "tsu",
    て: "te",
    と: "to",
    な: "na",
    に: "ni",
    ぬ: "nu",
    ね: "ne",
    の: "no",
    は: "ha",
    ひ: "hi",
    ふ: "fu",
    へ: "he",
    ほ: "ho",
    ま: "ma",
    み: "mi",
    む: "mu",
    め: "me",
    も: "mo",
    ら: "ra",
    り: "ri",
    る: "ru",
    れ: "re",
    ろ: "ro",
    や: "ya",
    ゆ: "yu",
    よ: "yo",
    わ: "wa",
    ゐ: "wi",
    ゑ: "we",
    を: "wo",
    ん: "n",
    が: "ga",
    ぎ: "gi",
    ぐ: "gu",
    げ: "ge",
    ご: "go",
    ざ: "za",
    じ: "ji",
    ず: "zu",
    ぜ: "ze",
    ぞ: "zo",
    だ: "da",
    ぢ: "ji",
    づ: "zu",
    で: "de",
    ど: "do",
    ば: "ba",
    び: "bi",
    ぶ: "bu",
    べ: "be",
    ぼ: "bo",
    ぱ: "pa",
    ぴ: "pi",
    ぷ: "pu",
    ぺ: "pe",
    ぽ: "po",
    ゔぁ: "va",
    ゔぃ: "vi",
    ゔ: "vu",
    ゔぇ: "ve",
    ゔぉ: "vo"
  };

  let hiragana = req.body.hiragana;
  let savedObject = {};
  for (let i = 0; i < hiragana.length; i++) {
    savedObject[`${cipher[hiragana[i]]}`] = hiragana[i];
  }

  let vocabWord = req.body.english;
  let savedVocab = {};

  savedVocab[vocabWord] = savedObject;

  console.log(savedVocab);

  User.findById({ _id: req.user._id })
      .then( user => {
        user.vocab.push(savedVocab);
        user.save();
        res.send('hello');
      })
      .catch( error => {
        res.json(error);
      })
})

module.exports = router;
