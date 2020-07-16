let englishSentences = [
  [
    'John ate an apple before afternoon',
    'before afternoon John ate an apple',
    'John before afternoon ate an apple'
  ],
  [
    'some students like to study in the night',
    'at night some students like to study'
  ],
  ['John and Mary went to church', 'Mary and John went to church'],
  [
    'John went to church after eating',
    'after eating John went to church',
    'John after eating went to church'
  ],
  ['did he go to market', 'he did go to market'],
  [
    'the woman who called my sister sells cosmetics',
    'the woman who sells cosmetics called my sister',
    'my sister who sells cosmetics called the woman',
    'my sister who called the woman sells cosmetics'
  ],
  [
    'John goes to the library and studies',
    'John studies and goes to the library'
  ],
  ['John ate an apple so did she', 'she ate an apple so did John'],
  [
    'the teacher returned the book after she noticed the error',
    'the teacher noticed the error after she returned the book',
    'after the teacher returned the book she noticed the error',
    'after the teacher noticed the error she returned the book',
    'she returned the book after the teacher noticed the error',
    'she noticed the error after the teacher returned the book',
    'after she returned the book the teacher noticed the error',
    'after she noticed the error the teacher returned the book'
  ],
  [
    'I told her that I bought a book yesterday',
    'I told her yesterday that I bought a book',
    'yesterday I told her that I bought a book',
    'I bought a book that I told her yesterday',
    'I bought a book yesterday that I told her',
    'yesterday I bought a book that I told her'
  ]
];

let hindiSentences = [
  [
    'राम और श्याम बाजार गयें',
    'राम और श्याम गयें बाजार',
    'बाजार गयें राम और श्याम',
    'गयें बाजार राम और श्याम'
  ],
  [
    'राम सोया और श्याम भी',
    'श्याम सोया और राम भी',
    'सोया श्याम और राम भी',
    'सोया राम और श्याम भी'
  ],
  [
    'मैंने उसे बताया कि राम सो रहा है',
    'मैंने उसे बताया कि सो रहा है राम',
    'उसे मैंने बताया कि राम सो रहा है',
    'उसे मैंने बताया कि सो रहा है राम',
    'मैंने बताया उसे कि राम सो रहा है',
    'मैंने बताया उसे कि सो रहा है राम',
    'उसे बताया मैंने कि राम सो रहा है',
    'उसे बताया मैंने कि सो रहा है राम',
    'बताया मैंने उसे कि राम सो रहा है',
    'बताया मैंने उसे कि सो रहा है राम',
    'बताया उसे मैंने कि राम सो रहा है',
    'बताया उसे मैंने कि सो रहा है राम'
  ],
  [
    'राम खाकर सोया',
    'खाकर राम सोया',
    'राम सोया खाकर',
    'खाकर सोया राम',
    'सोया राम खाकर',
    'सोया खाकर राम'
  ],
  [
    'बिल्लियों को मारकर कुत्ता सो गया',
    'मारकर बिल्लियों को कुत्ता सो गया',
    'बिल्लियों को मारकर सो गया कुत्ता',
    'मारकर बिल्लियों को सो गया कुत्ता',
    'कुत्ता सो गया बिल्लियों को मारकर',
    'कुत्ता सो गया मारकर बिल्लियों को',
    'सो गया कुत्ता बिल्लियों को मारकर',
    'सो गया कुत्ता मारकर बिल्लियों को'
  ],
  [
    'एक लाल किताब वहाँ है',
    'एक लाल किताब है वहाँ',
    'वहाँ है एक लाल किताब',
    'है वहाँ एक लाल किताब'
  ],
  [
    'एक बड़ी सी किताब वहाँ है',
    'एक बड़ी सी किताब है वहाँ',
    'बड़ी सी एक किताब वहाँ है',
    'बड़ी सी एक किताब है वहाँ',
    'वहाँ है एक बड़ी सी किताब',
    'वहाँ है बड़ी सी एक किताब',
    'है वहाँ एक बड़ी सी किताब',
    'है वहाँ बड़ी सी एक किताब'
  ]
];

function scramble() {
  // let jumbledDiplayDiv = document.getElementById('JumbledSentence');
  // while (jumbledDiplayDiv.firstChild) {
  //   jumbledDiplayDiv.removeChild(jumbledDiplayDiv.firstChild);
  // }
  document.getElementById('JumbledSentence').innerHTML = '';
  document.getElementById('Evaluation').innerHTML = '';
  document.getElementById('FormedSentence').innerHTML = '';
  document.getElementById('CorrectAnswers').innerHTML = '';
  let language = document.getElementById('Language');
  let selectedLanguage = language.options[language.selectedIndex].value;
  if (selectedLanguage === 'English' || selectedLanguage === 'Hindi') {
    document.getElementById('TextDescription').innerHTML =
      'Form a sentence(Declarative or Interrogative or any other type)from the given words<br>(select the buttons in proper order)';
    if (selectedLanguage === 'English') {
      createSentence(englishSentences);
    } else if (selectedLanguage === 'Hindi') {
      createSentence(hindiSentences);
    }
  } else {
    alert('Select language!');
  }
}

function createSentence(lauguageSentencesArray = [], statement = '') {
  document.getElementById('JumbledSentence').innerHTML = '';
  document.getElementById('Evaluation').innerHTML = '';
  document.getElementById('FormedSentence').innerHTML = '';
  document.getElementById('CorrectAnswers').innerHTML = '';
  document.getElementById('ReformSentence').innerHTML = '';
  let arrayIndex = Math.floor(Math.random() * lauguageSentencesArray.length);
  let statemenrIndex = Math.floor(
    Math.random() * lauguageSentencesArray[arrayIndex].length
  );
  if (!statement) {
    statement = lauguageSentencesArray[arrayIndex][statemenrIndex];
  }
  let jumbledStatementArray = statement
    .split(' ')
    .sort(() => Math.random() - 0.5);
  let jumbledDiplayDiv = document.getElementById('JumbledSentence');
  let evaluationDiv = document.getElementById('Evaluation');
  let formedSentence = document.getElementById('FormedSentence');
  let correctAnswersDiv = document.getElementById('CorrectAnswers');
  let reformSentenceDiv = document.getElementById('ReformSentence');
  let DomButtons = [];
  for (let index = 0; index < jumbledStatementArray.length; index++) {
    DomButtons[index] = document.createElement('BUTTON');
    DomButtons[index].style.margin = '0 10px';
    DomButtons[index].innerHTML = jumbledStatementArray[index];
    DomButtons[index].id = index;
    let reformSentenceButton = document.createElement('BUTTON');
    reformSentenceButton.innerHTML = 'Re-form the sentence';
    reformSentenceButton.style.display = 'none';
    reformSentenceButton.onclick = function () {
      reformSentenceButton.remove();
      createSentence(lauguageSentencesArray, statement);
    };
    reformSentenceDiv.appendChild(reformSentenceButton);
    let formedSentenceHeading = document.createElement('H6');
    formedSentenceHeading.innerHTML =
      'Formed Sentence (after selecting words):';
    formedSentenceHeading.style.display = 'none';
    formedSentence.appendChild(formedSentenceHeading);
    DomButtons[index].onclick = function () {
      formedSentenceHeading.style.display = 'block';
      formedSentence.innerHTML += DomButtons[index].innerHTML + ' ';
      DomButtons[index].remove();
      if (
        jumbledDiplayDiv.childElementCount ===
        statement.split(' ').length - 1
      ) {
        reformSentenceButton.style.display = 'block';
      }
      if (jumbledDiplayDiv.childElementCount === 0) {
        let evaluateButton = document.createElement('BUTTON');
        evaluateButton.innerHTML = 'Check the correctness of this  sentence';
        evaluateButton.onclick = () => {
          let evaluatedAnswer = document.createElement('H1');
          if (evaluationDiv.childElementCount < 2) {
            evaluatedAnswer.innerHTML = '';
            if (statement.trim() === formedSentence.innerHTML.trim()) {
              evaluatedAnswer.innerHTML = 'Right answer!!!';
              evaluatedAnswer.style.color = '#00FF00';
            } else {
              evaluatedAnswer.innerHTML = 'Wrong answer!!!';
              evaluatedAnswer.style.color = '#FF0000';
              let showAnswersButton = document.createElement('BUTTON');
              showAnswersButton.innerHTML = 'Get Correct Sentence';
              let correctAnswers = document.createElement('H2');
              showAnswersButton.onclick = () => {
                if (correctAnswersDiv.childElementCount <= 2) {
                  if (showAnswersButton.innerHTML === 'Get Correct Sentence') {
                    correctAnswers.innerHTML = lauguageSentencesArray[
                      arrayIndex
                    ].join('<br>');
                    showAnswersButton.innerHTML = 'Hide the correct Sentence';
                  } else if (
                    showAnswersButton.innerHTML === 'Hide the correct Sentence'
                  ) {
                    showAnswersButton.innerHTML = 'Get Correct Sentence';
                    correctAnswers.innerHTML = '';
                  }
                }
                correctAnswersDiv.appendChild(correctAnswers);
              };
              correctAnswersDiv.appendChild(showAnswersButton);
            }
          }
          evaluationDiv.appendChild(evaluatedAnswer);
        };
        evaluationDiv.appendChild(evaluateButton);
      }
    };
    jumbledDiplayDiv.appendChild(DomButtons[index]);
  }
}
