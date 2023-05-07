//input
const startSection = document.getElementById('startSection');
const questionSection = document.getElementById('QuestionSection');
const winSection = document.getElementById('WinSection');
const failSection = document.getElementById('FailSection');

const answerButtonsElement = document.getElementById('answerBtns')

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


  function selectAnswer(event) {
    const selectedButton = event.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
  }
  
  function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
      nextButton.classList.remove('hide')
      startButton.classList('hide')
    } else {
      element.classList.add('wrong')
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
      nextButton.classList('hide')
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }