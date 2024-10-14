// Define correct answers for the quiz
const correctAnswers = {
    q1: 'a',  // Flexible Box Layout
    q2: 'c',  // display: flex
    q3: 'b',  // justify-content
    q4: 'b',  // flex-flow
    q5: 'a',  // row
    q6: 'b',  // flex-direction: column;
    q7: 'b',  // Distributes space evenly between items
    q8: 'd',  // flex-wrap
    q9: 'c',  // nowrap
    q10: 'c', // align-items
    q11: 'b', // Items wrap onto multiple lines in reverse order
    q12: 'b', // inline because the element behaves like simple text, and flexbox because its child elements become flex items
    q13: 'b', // justify-content
    q14: 'b', // flex-direction: column-reverse;
    q15: 'b', // flex-grow: 1;
    q16: 'b', // flex-shrink: 0;
    q17: 'a', // flex-basis: 80px;
    q18: 'c', // align-items: stretch;
    q19: 'a', // order
    q20: 'a', // Distributes remaining space between the lines
    q21: 'c', // align-items: stretch;
    q22: 'c', // align-items: flex-end;
    q23: 'a', // align-items: baseline;
    q24: 'b', // Only when flex-wrap: wrap is set and there are multiple lines
    q25: 'a', // Stretches each line to fill the remaining space
    q26: 'a', // Each line fills the space it needs and aligns to the start of the cross axis
    q27: 'b', // Aligns all lines to the end of the cross axis
    q28: 'c', // Centers all lines along the cross axis
    q29: 'a', // Distributes remaining space between the lines
    q30: 'b', // align-self
};

// Submit the quiz and calculate the score
function submitQuiz() {
    const form = document.getElementById('quizForm');
    const resultDiv = document.getElementById('result');
    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;
    let resultHTML = `<h2>Results:</h2>`;
    let wrongAnswersHTML = `<h3>Incorrect Answers:</h3><ul>`;

    for (let [question, correctAnswer] of Object.entries(correctAnswers)) {
        const userAnswer = form[question].value;
        if (userAnswer === correctAnswer) {
            score++;
        } else {
            const questionNumber = question.slice(1);
            const correctOption = getOptionText(question, correctAnswer);
            const userOption = userAnswer ? getOptionText(question, userAnswer) : "No answer";
            wrongAnswersHTML += `<li class="wrong">Question ${questionNumber}: You answered "${userOption}", the correct answer is "${correctOption}".</li>`;
        }
    }

    wrongAnswersHTML += `</ul>`;

    if (score === totalQuestions) {
        resultHTML += `<p class="correct">Congratulations! You answered all ${score} questions correctly.</p>`;
    } else {
        resultHTML += `<p class="correct">You answered ${score} out of ${totalQuestions} questions correctly.</p>`;
        resultHTML += wrongAnswersHTML;
    }

    resultDiv.innerHTML = resultHTML;
    resultDiv.style.display = 'block';
}

// Helper function to get the text of the selected option
function getOptionText(question, value) {
    const form = document.getElementById('quizForm');
    const label = form.querySelector(`input[name="${question}"][value="${value}"]`).parentElement.textContent.trim();
    return label;
}
