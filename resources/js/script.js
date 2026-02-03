const frontCards = document.getElementsByClassName('front-card')
const backCards = document.getElementsByClassName('back-card')

const frontCardsArray = Array.from(frontCards)
const backCardsArray = Array.from(backCards)

function flipCard(e) {
    let i = frontCardsArray.indexOf(e.currentTarget)
    frontCardsArray[i].style.display = "none"
    backCardsArray[i].style.display = "flex"
}

function flipBackCard(e) {
    let i = backCardsArray.indexOf(e.currentTarget)
    backCardsArray[i].style.display = "none"
    frontCardsArray[i].style.display = "flex"
}

frontCardsArray.forEach(card => {
    card.addEventListener("click", flipCard)
})

backCardsArray.forEach(card => {
    card.addEventListener("click", flipBackCard)
})


const cv = document.getElementById('cv');
const cvLink = cv.children[0];
const cvText = cv.children[1];

function clearText() {
    const cvOpacity = getComputedStyle(cvLink).opacity
    if(cvOpacity === "1") {
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


const burger = document.querySelector('.burger')
const headerLinks = document.getElementById('header-links')

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    headerLinks.classList.toggle('active');
})

for(let c = 0; c < headerLinks.children.length; c++) {
    headerLinks.children[c].addEventListener('click', () => {
        burger.classList.remove('active');
        headerLinks.classList.remove('active');
    })
}


const popupContainer = document.querySelector('.popup-container')
const learnToCode = document.querySelector('#learn-to-code')
const closePopup = document.querySelector('#close-popup')
const body = document.body
const html = document.documentElement

const bodyScroll = () => {
    if(popupContainer.classList.contains('active')) {
        body.style.overflowY = "hidden"
        html.style.overflowY = "hidden"
    } else {
        body.style.overflowY = "scroll"
        html.style.overflowY = "scroll"
    }
}

learnToCode.addEventListener('click', () => {
    popupContainer.classList.toggle('active')
    bodyScroll()
})

closePopup.addEventListener('click', () => {
    popupContainer.classList.remove('active')
    bodyScroll()
})