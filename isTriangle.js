const inputs = document.querySelectorAll(".angle-input")
const isTriangleButton = document.querySelector("#is-triangle")
const output = document.querySelector("#output")

const calculateSumOfAngles = (angle1, angle2,angle3) =>{
    return angle1 + angle2 + angle3
    // console.log(sumOfAngles)

}

isTriangleButton.addEventListener('click', () =>{
    // console.log('clicked')
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value) )
    // console.log(sumOfAngles)
    if(sumOfAngles === 180){
        console.log('angles can form a triangle')
        output.innerText = 'angles can form a triangle'
    } else {
        console.log('o oh! cant form a triangle')
        output.innerText = 'o oh! cant form a triangle'
    }
})