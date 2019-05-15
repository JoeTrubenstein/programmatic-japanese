var User = require("../models/User");

module.exports = {
  pushVocab: function(req, res, next) {
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
    console.log("req body = " + " " + req.body.hiragana)
    let savedObject = {};
    for (let i = 0; i < hiragana.length; i++) {
      savedObject[`${i}-${cipher[hiragana[i]]}`] = hiragana[i];
    }

    console.log(savedObject);

    let vocabWord = req.body.english;
    let savedVocab = {};

    savedVocab[vocabWord] = savedObject;

    console.log(savedVocab);

    User.findById({ _id: req.user._id })
      .then(user => {
        user.vocab.push(savedVocab);
        user.save();
        res.render("vocab", {title: 'yeah',success: "saved word"})
      })
      .catch(error => {
        res.json(error);
      });
  }
};
