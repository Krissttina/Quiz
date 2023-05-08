//input
const startSection = document.getElementById('startSection');
const questionSection = document.getElementById('QuestionSection');
const winSection = document.getElementById('WinSection');
const failSection = document.getElementById('FailSection');

const answerBtns = document.getElementById('answerBtns')

//start the quiz
document.getElementById('startBtn').addEventListener('click', () => {
  startSection.style.display = 'none';
  questionSection.style.display = 'block';
});

//choose answear
const questions = [
    {
      question: 'What does HTML stand for?',
      answers: [
        { text: 'Hyper Text Markup Language', correct: true },
        { text: 'Home Tool Markup Language', correct: false },
        { text: 'Hyperlinks and Text Markup Language', correct: false }
      ]
    }
  ]

  let currIndex = 0;


  function showQuestion() {
    let currQestion = questions[currIndex]
    

    currQestion.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerHTML = answer.text
      button.classList.add('btn')
      answerBtns.appendChild(button)
      
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      
    })
  }

  function selectAnswer(e) {
    const selected = e.target;
    const isCorrect = selected.dataset.correct;
    
    if(isCorrect){
      selected.classList.add('correct');
    }else{
      selected.classList.add('incorrect');
    }

    Array.from(answerBtns.children).forEach(button => {
      if(button.dataset.correct === 'true'){
        button.classList.add('correct')
      }
      button.disabled = 'true';
    })
    console.log('works');
  }

  showQuestion()
