const btn = document.querySelector(".button")
const span = document.querySelector(".hexCode")
const body = document.querySelector("body")
const hex = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F" ]

function colorChange() {
  const randomColor = [];
  const hexCode = hex.length;

  for ( let i = 0; i < 6; i++ ) {
    let random = Math.floor(Math.random() * hexCode )
    randomColor.push(hex[random])
  }

  let result = randomColor.join("")
  body.style.backgroundColor = `#${result}`
  span.textContent = `#${result}`
}

function init() {
  btn.addEventListener("click", colorChange)
}

init()