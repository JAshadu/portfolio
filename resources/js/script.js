// card flip function
const frontCards = document.getElementsByClassName('front-card')
const backCards = document.getElementsByClassName('back-card')

const frontCardsArray = Array.from(frontCards)
const backCardsArray = Array.from(backCards)

function flipCard(e) {
    let i = frontCardsArray.indexOf(e.currentTarget)
    frontCardsArray[i].style.display = "none"
    backCardsArray[i].style.display = "block"
}

function flipBackCard(e) {
    let i = backCardsArray.indexOf(e.currentTarget)
    backCardsArray[i].style.display = "none"
    frontCardsArray[i].style.display = "block"
}

frontCardsArray.forEach(card => {
    card.addEventListener("click", flipCard)
})

backCardsArray.forEach(card => {
    card.addEventListener("click", flipBackCard)
})


// cv section
const cv = document.getElementById('cv');
const cvLink = cv.children[0];
const cvText = cv.children[1];

function clearText() {
    const cvOpacity = getComputedStyle(cvLink).opacity
    if(cvOpacity === "0.8") {
        cvText.style.display = "none"
        cvLink.style.border = "4px solid hsla(51, 90%, 50%, 0.95)"
    }
    else{
        cvText.style.display = ""
        cvLink.style.border = "none"
    }
}

cvLink.addEventListener("mouseenter", clearText)
cvLink.addEventListener("mouseleave", clearText)