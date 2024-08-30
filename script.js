const firstNumber = ""
const operator = ""
const secondNumber = ""
const containerEl = document.querySelector(".container")
const search = document.querySelector(".num-container")
const numButton = document.querySelectorAll(".but")
const clearButton = document.querySelector(".clear")



function add(num1, num2){
    return num1 + num2
}

function subtract(num1, num2){
    return num1 -num2
}

function multiply(num1, num2){
    return num1 * num2
}

function divide(num1, num2){
    return num1 / num2
}

for(let i=0;i < numButton.length;i++){
    numButton[i].addEventListener("click", () =>{
        let para = document.createElement("p")
        para.textContent = `${numButton[i].innerHTML}`
        search.appendChild(para)
}
)
}






