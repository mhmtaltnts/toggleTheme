const body = document.getElementById("happy")
const greeting = document.getElementById("greeting")
const newyearBtn = document.getElementById("newyear")
const snowBtn = document.getElementById("snow")

newyearBtn.addEventListener("click", themeNewyear)
snowBtn.addEventListener("click", themeSnow)

function themeNewyear(){
    body.classList.add("newyear")
    body.classList.remove("snow")
    greeting.innerHTML="Happy new year"
    }
function themeSnow(){
    body.classList.add("snow")
    body.classList.remove("newyear")
    greeting.innerHTML="Let it snow"
    }


// Task:
//- Add the functionality to switch the theme between 'Newyear' and 'snow'.

// Stretch goals:
// - Add more themes!
// - Allow the user to customise the themes.
// - Turn the radio buttons into a toggle switch.

