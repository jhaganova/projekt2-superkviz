let answers1 = ['War, anger, blood', 'Death, sleep, dreams', 'Wilderness, wandering, freedom']
let answers2 = ['Survival, prosperity, happiness', 'Gentleness, indecisiveness, whimsical thinking', 'Change, creativity, imagination']
let answers3 = ['Dreams, peace, close bonds', 'Youthful joy, happiness, life', 'Innocence, purity, true love']


let questionGroup = [
    {
        question: "What is the meaning of poppy flower?",
        image: "obrazky/flower1.jpg",
        answers: answers1,
        correctAnswer: 1,
    },

    {
        question: "What is the meaning of dandelion flower?",
        image: "obrazky/flower2.jpg",
        answers: answers2,
        correctAnswer: 0,
    },

    {
        question: "What is the meaning of daisy flower?",
        image: "obrazky/flower3.jpg",
        answers: answers3,
        correctAnswer: 2,
    },
];

let userAnswers = [];
let currentQuestionIndex = 0;





console.log(questionGroup);


function createOrClearDiv(className) {
    let div = document.getElementsByClassName(className)[0];
    
    if (div == undefined) {
        div = document.createElement('div');
        div.className = className;
        document.body.appendChild(div);
    } else {
        div.innerHTML = "";
    }

    return div;
}



function displayQuestion(questionData, questionIndex) {
    let quizDiv = createOrClearDiv('kviz');

    
    let numberQuestion = document.createElement('h3');
    numberQuestion.id = 'poradi';
    numberQuestion.innerText = 'Otázka ' + (questionIndex + 1) + '/' + questionGroup.length;

    quizDiv.appendChild(numberQuestion);


    let questionTitle = document.createElement('h2');
    questionTitle.id = 'otazka';
    questionTitle.innerText = questionData.question;
    
    quizDiv.appendChild(questionTitle);



    let questionContent = document.createElement('div');
    questionContent.className = 'obsah';
    quizDiv.appendChild(questionContent);


    let questionImageDiv = document.createElement('div');
    questionImageDiv.className = 'foto';

    questionContent.appendChild(questionImageDiv);


    let questionImage = document.createElement('img');
    questionImage.id = 'obrazek';
    questionImage.src = questionData.image;

    questionImageDiv.appendChild(questionImage);


    let questionOptionsDiv = document.createElement('div');
    questionOptionsDiv.id = 'moznosti';

    questionContent.appendChild(questionOptionsDiv);

    let questionOptionsList = document.createElement('ul');
    questionOptionsList.id = 'odpovedi';

    questionOptionsDiv.appendChild(questionOptionsList);


    questionData.answers.forEach(function(ele, idx, arr){
        let questionOption = document.createElement('li');
        questionOption.setAttribute("data-odpoved", idx);
        questionOption.innerText = ele;

        questionOptionsList.appendChild(questionOption);


        questionOption.addEventListener('click', onClickAnswer.bind(questionOption));
        });

}


displayQuestion(questionGroup[0], 0);



function onClickAnswer() {
    let answer = this;
    let userAnswer = answer.getAttribute('data-odpoved');
    userAnswers.push(userAnswer);

    console.log(userAnswer);
    console.log(questionGroup[currentQuestionIndex].answers[userAnswer]);

    if(currentQuestionIndex >= (questionGroup.length - 1)) {
        displayResults();
    }

    else 
        nextPage();
}



function nextPage() {
    currentQuestionIndex++;
    displayQuestion(questionGroup[currentQuestionIndex], currentQuestionIndex);
}




function displayResults() {
    let quizDiv = document.getElementsByClassName('kviz')[0];
    quizDiv.style.display = 'none';

    let resultsDiv = createOrClearDiv('vysledek');
    resultsDiv.style.display = 'block';


    let resultTitle = document.createElement('h2');
    resultTitle.innerText = 'Your results:'

    resultsDiv.appendChild(resultTitle);


    let correctCount = 0;

    for(let i=0; i<questionGroup.length; i++) {
        let questionData = questionGroup[i];
        let questionAnswers = questionData.answers;
        let userAnswerIdx = userAnswers[i];
        let userAnswer = questionAnswers[userAnswerIdx];
        let correctAnswerIdx = questionData.correctAnswer;
        let correctAnswer = questionAnswers[correctAnswerIdx];

        let questionTitle = document.createElement('h3');
        questionTitle.innerText = (i+1) + '. ' + questionData.question;

        resultsDiv.appendChild(questionTitle);

        let userAnswerDisplay = document.createElement('p');
        userAnswerDisplay.innerText = 'Your answer: ' + userAnswer;
        
        resultsDiv.appendChild(userAnswerDisplay);

        let correctAnswerDisplay = document.createElement('p');
        correctAnswerDisplay.innerText = 'Correct answer: ' + correctAnswer;

        resultsDiv.appendChild(correctAnswerDisplay);

        if(userAnswerIdx == correctAnswerIdx) {
            userAnswerDisplay.style.color = '#4CBB17';
            correctAnswerDisplay.innerText = 'You are correct!'
            correctCount++;
        } 

        else {
            userAnswerDisplay.style.color = '#ff0000';
        }
    }


    
    let successRate = Math.round((correctCount/questionGroup.length)*100);

    let successRateDisplay = document.createElement('h2');
        successRateDisplay.innerText = correctCount + ' out of ' + questionGroup.length + ' correct. Success rate ' + successRate + '%.'

        resultsDiv.appendChild(successRateDisplay);




}

