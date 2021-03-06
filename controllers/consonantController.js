module.exports = {
  getKana: function(req, res, next) {
    let hiragana = {
        "a": "あ",
        "i": "い",
        "u": "う",
        "e": "え",
        "o": "お",
        "k": {
            "a": "か",
            "i": "き",
            "u": "く",
            "e": "け",
            "o": "こ"
        },
        "s": {
            "a": "さ",
            "i": "し",
            "u": "す",
            "e": "せ",
            "o": "そ"
        },
        "t": {
            "a": "た",
            "i": "ち",
            "u": "つ",
            "e": "て",
            "o": "と"
        },
        "n": {
            "a": "な",
            "i": "に",
            "u": "ぬ",
            "e": "ね",
            "o": "の"
        },
        "h": {
            "a": "は",
            "i": "ひ",
            "u": "ふ",
            "e": "へ",
            "o": "ほ"
        },
        "m": {
            "a": "ま",
            "i": "み",
            "u": "む",
            "e": "め",
            "o": "も"
        },
        "y": {
            "a": "や",
            "u": "ゆ",
            "o": "よ"
        },
        "r": {
            "a": "ら",
            "i": "り",
            "u": "る",
            "e": "れ",
            "o": "ろ"
        },
        "w": {
            "a": "わ",
            "i": "ゐ",
            "e": "ゑ",
            "o": "を"
        },
        "g": {
            "a": "が",
            "i": "ぎ",
            "u": "ぐ",
            "e": "げ",
            "o": "ご"
        },
        "z": {
            "a": "ざ",
            "i": "じ",
            "u": "ず",
            "e": "ぜ",
            "o": "ぞ"
        },
        "d": {
            "a": "だ",
            "i": "ぢ",
            "u": "づ",
            "e": "で",
            "o": "ど"
        },
        "b": {
            "a": "ば",
            "i": "び",
            "u": "ぶ",
            "e": "べ",
            "o": "ぼ"
        },
        "p": {
            "a": "ぱ",
            "i": "ぴ",
            "u": "ぷ",
            "e": "ぺ",
            "o": "ぽ"
        },
        "v": {
            "a": "ゔぁ",
            "i": "ゔぃ",
            "u": "ゔ",
            "e": "ゔぇ",
            "o": "ゔぉ"
        }
    }
    let keys = Object.keys(hiragana)
    let consonant = req.params.consonant
    if (keys.includes(consonant)) {
      res.json({
        "consonant": consonant,
        "phonemes" : hiragana[consonant]
      });
    } else {
        res.render('error', {error: "bad request", message: "Not a valid consonant"})
    }
  } 
};
