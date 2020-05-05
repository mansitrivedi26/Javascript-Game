jQuery(document).ready(function($) {
    "use strict";
    /*alert("hi");*/
    var myQuestions = [
    	{
            question: 'what is root of 25?',
            answers: {
                A: '5',
                B: '25',
                C: '3',
                D: '10'
            },
            correctanswer: 'A'

        },
        {
            question: 'what is the value of PI?',
            answers: {
                A: '22',
                B: '7',
                C: '314',
                D: '3.14'
            },
            correctanswer: 'D'
        },
        {
            question: 'what is the formula for square area? (l= length,h=height,b=base)',
            answers: {
                A: 'l*b',
                B: 'l*b*h',
                C: 'l*l',
                D: 'l*h'
            },
            correctanswer: 'C'
        }
    ];
    var quizContainer = document.getElementById('quiz');
    var resultsContainer = document.getElementById('results');
    var submitButton = document.getElementById('submit');

    generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

    function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

        function showQuestions(questions, quizContainer) {
            // we'll need a place to store the output and the answer choices
            var output = [];
            var answers, letter;

            // for each question...
            for (var i = 0; i < questions.length; i++) {

                // first reset the list of answers
                answers = [];

                // for each available answer to this question...
                for (letter in questions[i].answers) {
                    // ...add an html radio button
                    answers.push(
                        '<label>' +
                        '<input type="radio" name="question' + i + '" value="' + letter + '">' +
                        letter + ': ' +
                        questions[i].answers[letter] +
                        '</label>'
                    );
                }

                // add this question and its answers to the output
                output.push(
                    '<div class="question">' + questions[i].question + '</div>' +
                    '<div class="answers">' + answers.join('') + '</div>'
                );
            }

            // finally combine our output list into one string of html and put it on the page
            quizContainer.innerHTML = output.join('');
        }

        function showResults(questions, quizContainer, resultsContainer) {

            // gather answer containers from our quiz
            var answerContainers = quizContainer.querySelectorAll('.answers');

            // keep track of user's answers
            var userAnswer = '';
            var numCorrect = 0;

            // for each question...
            for (var i = 0; i < questions.length; i++) {

                // find selected answer
                userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || { }).value;

                //alert(userAnswer);
                /*console.log(questions[i].correctanswer);*/
                // if answer is correct
                if (userAnswer === questions[i].correctanswer) {
                    // add to the number of correct answers
                    numCorrect++;

                    // color the answers green
                    answerContainers[i].style.color = 'lightgreen';
                }
                else {
                    // color the answers red
                    answerContainers[i].style.color = 'red';
                }
            }

            // show number of correct answers out of total
            resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
        }

        // show the questions
        showQuestions(questions, quizContainer);

        // when user clicks submit, show results
        submitButton.onclick = function() {
            showResults(questions, quizContainer, resultsContainer);
        }
    }

    // var accItem = document.getElementsByClassName('accordionItem');
    // var accHD = document.getElementsByClassName('accordionItemHeading');
    // for (i = 0; i < accHD.length; i++) {
    //     accHD[i].addEventListener('click', toggleItem, false);
    // }

    // function toggleItem() {
    //     var itemClass = this.parentNode.className;
    //     for (i = 0; i < accItem.length; i++) {
    //         accItem[i].className = 'accordionItem close';
    //     }
    //     if (itemClass == 'accordionItem close') {
    //         this.parentNode.className = 'accordionItem open';
    //     } else {
    //         this.parentNode.className = 'accordionItem close';
    //     }
    // }
});