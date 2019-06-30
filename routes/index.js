var express = require("express");
var router = express.Router();

var vocabPusher = require("../routes/users/utils/vocabPusher");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", {
    title: "Sushi Script",
    subtitle: "Learning Japanese with Javascript",
    vocab: [
      {
        Cat: {
          "0-ne": "ね",
          "1-ko": "こ"
        }
      },
      {
        dog: {
          "0-i": "い",
          "1-nu": "ぬ"
        }
      },
      {
        hello: {
          "0-ko": "こ",
          "1-n": "ん",
          "2-i": "い",
          "3-chi": "ち",
          "4-ha": "は"
        }
      },
    ]
  });
});

/* GET api page. */
router.get("/about", function(req, res, next) {
  res.render("about", { title: "Express" });
});

router.get("/flash-card", function(req, res, next) {
  res.render("flash-card", { title: "Sushi Script" });
});

/* GET vocab page. */
router.get("/vocab", function(req, res, next) {
  res.render("vocab", { title: "Express", success: [] });
});

/* add vocab word to a user */
router.post("/vocab/addword", vocabPusher.pushVocab);

module.exports = router;
