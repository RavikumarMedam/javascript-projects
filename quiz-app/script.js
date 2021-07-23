const quizData = [
    {
        question: 'How old is Ravi Kumar',
        a: '10',
        b: '17',
        c: '30',
        d: '110',
        correct: 'c'
    }, 
    {
        question: 'What is the best programming language in 2021',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'Javascript',
        correct: 'd'
    },
    {
        question: 'Who is the President of India',
        a: 'Ravi Kumar',
        b: 'Trump',
        c: 'Modi',
        d: 'Puthin',
        correct: 'c'
    },
    {
        question: 'What does HTML stands for',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Helicopters Terminals Motorboats Lamborginis',
        d: 'Json Object Notation',
        correct: 'a'
    },
    {
        question: 'What year was Javascript Launched',
        a: '1196',
        b: '2020',
        c: '1995',
        d: '1990',
        correct: 'c'
    }
];
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
         if(answerEl.checked) {
            answer = answerEl.id;
         }
    });

    return answer;
}

function deselectAnswer() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
   });
}

submitBtn.addEventListener("click", () => {
    // Check to see the answer
    const answer = getSelected();
    
    if(answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h3>You have answered correctly ${score} / ${quizData.length} questions</h3> <button onclick='location.reload()'>Reload</button>`
        }
    }
})