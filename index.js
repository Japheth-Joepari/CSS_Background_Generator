var color1,color2,h3,body
color1 = document.querySelector('.color1')
color2 = document.querySelector('.color2')
h3 = document.querySelector('h3')
body = document.body

function changeGradient() {
    body.style.background=`linear-gradient(to right, ${color1.value} , ${color2.value})`
    h3.textContent = body.style.background
}

color1.addEventListener("input", changeGradient)
color2.addEventListener("input", changeGradient)