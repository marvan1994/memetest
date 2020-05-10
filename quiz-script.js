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
var titleEl = document.getElementById('title');

var firstPage = document.getElementById('first');
var firstButton = document.getElementById('name-btn');

function resultC(score){
  if (score <= 3) {
    i=0
    ans = 'твой результат '+ score+' из 20.\n'+resultshow[i].part1 +'\n'+'Звание: '+resultshow[i].part2
  } else if (score >3 && score <=6) {
    i=1
    ans = 'твой результат '+ score+' из 20.\n'+resultshow[i].part1 +'\n'+'Звание: '+resultshow[i].part2
  } else if( score >6 && score <=10){
    i=2
    ans = 'твой результат '+ score+' из 20.\n'+resultshow[i].part1 +'\n'+'Звание: '+resultshow[i].part2
  }
    else if( score >10 && score <=13){
      i=3
      ans = 'твой результат '+ score+' из 20.\n'+resultshow[i].part1 +'\n'+'Звание: '+resultshow[i].part2
  }
    else if( score >13 && score <=16){
      i=4
      ans = 'твой результат '+ score+' из 20.\n'+resultshow[i].part1 +'\n'+'Звание: '+resultshow[i].part2
  }
  else if( score >16 && score <=19){
    i=5
    ans = 'твой результат '+ score+' из 20.\n'+resultshow[i].part1 +'\n'+'Звание: '+resultshow[i].part2
  }
  else if( score ==20){
    i=6
    ans = 'твой результат '+ score+' из 20.\n'+resultshow[i].part1 +'\n'+'Звание: '+resultshow[i].part2
  }
  return ans
}
function loadTest(){
  firstPage.style.display = 'none';
  container.style.display = '';
  loadQuestion(currentQuestion)
}
function loadQuestion(questionIndex){

  var q = questions[questionIndex]
  questionEl.textContent = (questionIndex+1)+'. '+q.question;
  opt1.textContent = q.option1;
  opt2.textContent = q.option2;
  opt3.textContent = q.option3;
  opt4.textContent = q.option4;
};

function loadNextQuestion() {
  var playerName = document.getElementById("nameInput").value;
  var selectedOption = document.querySelector('input[type=radio]:checked');

  if (!selectedOption){
    alert('Выбери ответ, дорогуша');
    return;
  }

  var answer = selectedOption.value;
  if (questions[currentQuestion].answer == answer){

    score +=1;

  }

  selectedOption.checked = false;
  currentQuestion++;

  if(currentQuestion == totQuestions-1){
    nexButton.textContent='Заканчиваем';
  }
  if (currentQuestion == totQuestions){
    container.style.display = 'none';
    result.style.display = '';
    //var endResult = ((score/totQuestions)*100).toFixed(2)

    //resultCont.textContent = playerName + ', ты знаешь нашу группу на ' + endResult + '%'

    resultCont.textContent = playerName+', \n'+resultC(score)
    return;
  }
  loadQuestion(currentQuestion);
};
