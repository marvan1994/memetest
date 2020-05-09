var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container=document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nexButton = document.getElementById('nexButton');
var resultCont = document.getElementById('result');
var titleEl = document.getElementById('title')
function loadQuestion(questionIndex){
  var q = questions[questionIndex]
  questionEl.textContent = (questionIndex+1)+'. '+q.question;
  opt1.textContent = q.option1;
  opt2.textContent = q.option2;
  opt3.textContent = q.option3;
  opt4.textContent = q.option4;
};

function loadNextQuestion() {

  var selectedOption = document.querySelector('input[type=radio]:checked');

  if (!selectedOption){
    alert('Выбери ответ, дорогуша');
    return;
  }

  var answer = selectedOption.value;
  if (questions[currentQuestion].answer == answer){

    score +=1;
    questionEl.textContent = 'Зашел в функцию'
  }

  selectedOption.checked = false;
  currentQuestion++;

  if(currentQuestion == totQuestions-1){
    nexButton.textContent='Заканчиваем';
  }
  if (currentQuestion == totQuestions){
    container.style.display = 'none';
    result.style.display = '';
    resultCont.textContent = 'Ты знаешь нашу группу на ' + ((score/totQuestions)*100).toFixed(2) + '%'
    return;
  }
  loadQuestion(currentQuestion);
};

loadQuestion(currentQuestion)
