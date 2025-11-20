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