const sides = document.querySelectorAll(".side-input")
const hypotenuseButton = document.querySelector("#hypotenuse-button")
const output = document.querySelector("#output")

function calculateSumOfSquares(a,b){
    const sumOfSquares = a*a + b*b
    return sumOfSquares
}

function calculateHypotenuse(){
    console.log('clicked')
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value))
    // console.log(sumOfSquares)
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares)
    // console.log(lengthOfHypotenuse)
    output.innerText = `length of the hypotenuse = ${lengthOfHypotenuse}`
}

hypotenuseButton.addEventListener('click', calculateHypotenuse)