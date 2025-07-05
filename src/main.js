import './style.css'


const h1 = `Improve your front-end skills by building projects`
const h2 = `Scan the QR code to visit Frontend Mentor and take your coding skills to next level`


const app = document.querySelector('#app')
app.classList.add("-flex-column-center")
app.innerHTML = `
  <div class="-card -flex-column-center -shadow-1">
    <img src="./frame.svg" />
    <h3>${h1}</h3>
    <p>${h2}</p>
  </div>
`




