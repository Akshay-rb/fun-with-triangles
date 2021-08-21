const inputs = document.querySelectorAll(".inputs")
const calculateAreaButton = document.querySelector("#calculate-area-button")
const output = document.querySelector("#output")

function calculateArea(base, height){
return (base * height)/2 
}


calculateAreaButton.addEventListener('click', () =>{
    const area = calculateArea(Number(inputs[0].value), Number(inputs[1].value))
//    console.log(area)
    output.innerText = `area of the triangle for base ${inputs[0].value} & height ${inputs[1].value} is ${area}`
})