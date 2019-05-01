textBox = document.getElementById("vocab-input");
phonBox = document.getElementById("new-obj");

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

// displays the object live as it's being typed
textBox.addEventListener("input", function(evt) {
  phonBox.innerHTML = " ";
  toPhon = String(textBox.value);
  let vocabObject = {};

  for (let i = 0; i < toPhon.length; i++) {
    phon = document.createElement("h4");
    if (!cipher[toPhon.charAt(i)]) {
      phon.innerHTML = " ";
    } else {
      let leftSide = toPhon.charAt(i);
      let rightSide = cipher[toPhon.charAt(i)];
      phon.innerHTML = `  "${toPhon.charAt(i)}" : "${
        cipher[toPhon.charAt(i)]
      }"`;
      phonBox.appendChild(phon);
      vocabObject[leftSide] = rightSide;
    }
  }
  // saves the object but loops too much
  /*
  vocabButton.addEventListener("click", function(evt) {
    let vocabWord = document.getElementById("newVocab").value;
    savedObject = {};
    savedObject[vocabWord] = vocabObject;
    console.log(savedObject);
  });
  */
});

// saves the object correctly
vocabButton.addEventListener("click", function(evt) {
  let hiragana = textBox.value;
  let savedObject = {};
  for (let i = 0; i < hiragana.length; i++) {
    savedObject[`${cipher[hiragana[i]]}`] = hiragana[i];
  }

  let vocabWord = document.getElementById("newVocab").value;
  let savedVocab = {};

  savedVocab[vocabWord] = savedObject;
  phonBox.innerHTML = " ";
  phonBox.innerHTML = `<code>${JSON.stringify(savedVocab)}</code>`
  console.log(savedVocab);
});
