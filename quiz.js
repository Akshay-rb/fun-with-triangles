const quizForm = document.querySelector(".quiz-form")
const submitButton = document.querySelector("#submit-answer-button")
const output = document.querySelector("#output")

const correctAnswers = ["90","right angled"]

function calculateScore(){
    let score =0
    let index = 0
    const formResults = new FormData(quizForm)
    // console.log(formResults)
    for(let value of formResults.values()){
        // console.log(entry)
        if(value === correctAnswers[index]){
            score= score +1
        }
        index = index +1
    }
    // console.log(score)
    output.innerText = `you scored ${score} /2` //"you scored "+score +" / 2"
}

submitButton.addEventListener('click', calculateScore)