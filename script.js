//input
const startSection = document.getElementById('startSection');
const questionSection = document.getElementById('QuestionSection');
const winSection = document.getElementById('WinSection');
const failSection = document.getElementById('FailSection');

const answerBtns = document.getElementById('answerBtns');
const ques = document.getElementById('question');

const nextBtn = document.querySelector('.nextBtn');
const submitBtn = document.querySelector('.submitBtn');

//start the quiz
document.getElementById('startBtn').addEventListener('click', () => {
  startSection.style.display = 'none';
  questionSection.style.display = 'block';

  submitBtn.disabled = true;
  submitBtn.style.background = 'grey';
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
    },
    {
      question: 'What does CSS stand for?',
      answers: [
        { text: 'Calling Style Sheet', correct: false },
        { text: 'Cascading Style Sheets', correct: true },
        { text: 'Cicle Style Sample', correct: false }
      ]
    },
    {
      question: 'What does JSON stand for?',
      answers: [
        { text: 'JavaScript Object Notation', correct: true },
        { text: 'Java Open Number', correct: false },
        { text: 'JS Object Note', correct: false }
      ]
    },
    {
      question: 'Which are the main JS variable types?',
      answers: [
        { text: 'var, char, boolean', correct: false },
        { text: 'const, boolean, char', correct: false },
        { text: 'let, string, boolean', correct: true }
      ]
    },
    {
      question: 'For what is XML used for?',
      answers: [
        { text: 'programming', correct: false },
        { text: 'text model', correct: true },
        { text: 'taking notes', correct: false }
      ]
    }
  ]

  let currIndex = 0;
  let score = 0;

  function showQuestion() {
    let currQuestion = questions[currIndex];
    
    currIndex++;
    let questionNum = currIndex;
    
    ques.innerHTML = questionNum + '. ' + currQuestion.question;

    currQuestion.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerHTML = answer.text
      button.classList.add('btn')
      answerBtns.appendChild(button)
      
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener('click', selectAnswer)
    })

    nextBtn.addEventListener('click', () => {
      if(currIndex < questions.length){
        while (answerBtns.firstChild) {
          answerBtns.removeChild(answerBtns.firstChild);
        }
        
        nextQuestion();
      }else{
        submitBtn.addEventListener('click', onSubmit);
      }
    })
  }

  function selectAnswer(e) {
    const selected = e.target;
    const isCorrect = selected.dataset.correct;
    
    if(isCorrect){
      selected.classList.add('correct');
      selected.style.background = 'green';
      score++;
    }else{
      selected.classList.add('incorrect');
      selected.style.background = 'red';
    }

    Array.from(answerBtns.children).forEach(button => {
      if(button.dataset.correct === 'true'){
        button.classList.add('correct')
      }
      button.disabled = 'true';
    })

  }

 function nextQuestion(){
    //submit btn to shows up

  if(questions.length - currIndex ==  1){
      nextBtn.disabled = 'true';
      nextBtn.style.background = 'grey';

      submitBtn.disabled = 'false';
      submitBtn.style.background = 'green';
    }
  showQuestion();
 }

 //submit the answers
 function onSubmit(){
  console.log(score);
  if(score == questions.length){
    winSection.style.display = 'none';
  }else{
    failSection.style.display = 'none';

    //create repeat btn
  }
}

  showQuestion()