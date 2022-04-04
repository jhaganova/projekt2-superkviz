let answers1 = ['answer1', 'answer2', 'answer3']
let answers2 = ['answer1', 'answer2', 'answer3']
let answers3 = ['answer1', 'answer2', 'answer3']


let questionGroup = [
    {
        question: "question 1",
        image: "obrazky/flower1.jpg",
        answers: answers1,
        correctAnswer: 0,
    },

    {
        question: "question 2",
        image: "obrazky/flower2.jpg",
        answers: answers2,
        correctAnswer: 0,
    },

    {
        question: "question 3",
        image: "obrazky/flower3.jpg",
        answers: answers3,
        correctAnswer: 0,
    },
];


console.log(questionGroup)
displayQuestion(questionGroup[0], 0)



function displayQuestion(questionData, questionIndex) {
    let quizDiv = document.getElementsByClassName('kviz')[0];
    
    if (quizDiv == undefined) {
        quizDiv = document.createElement('div');
        quizDiv.className = 'kviz';
        document.body.appendChild(quizDiv);
    }
    
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
        questionOptionsList.appendChild(questionOption);
        questionOption.innerText = ele;
        })


}





// questionData
// questionIndex
