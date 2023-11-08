const span = document.querySelector("span")
const btn = document.querySelector("btn")

const generateHexColor = () => {
const randomColor = Math.random().toString(16).slice(2, 8)  

span.innerHTML = '#' + randomColor

body.style.backgroundColor = '#' + randomColor
}
console.log(randomColor);

btn.addEventListener("click", generateHexColor)

body.addEventListener("mousewheel", generateHexColor)