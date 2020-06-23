const modalOverlay = document.querySelector(`.modal-overlay`);
const cards = document.querySelectorAll(`.card`)
const cardType = document.querySelector(`.modal`)

for (let card of cards) {
    card.addEventListener("click", function () {
        const classID = card.getAttribute("id");
        modalOverlay.classList.add(`active`)
        cardType.classList.add(classID)
        modalOverlay.querySelector("img").src = `assets/${classID}`
        console.log(classID)
            
    })
}


for(let card of cards){
document.querySelector(`.close-modal`).addEventListener(`click`, function () {
    const classID = card.getAttribute("id");
    modalOverlay.classList.remove(`active`)
    cardType.classList.remove(`${classID}`)
    modalOverlay.querySelector(`iframe`).src = ""
})
}