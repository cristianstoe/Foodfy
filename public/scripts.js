const modalOverlay = document.querySelector(`.modal-overlay`);
const cards = document.querySelectorAll(`.card`)
const cardType = document.querySelector(`.modal`)

for (let card of cards) {
    card.addEventListener("click", function () {
        const classID = card.getAttribute("id");
        window.location.href = `/receitas/${classID}`
    })
}
