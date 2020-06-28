const modalOverlay = document.querySelector(`.modal-overlay`);
const cards = document.querySelectorAll(`.card`)
const cardType = document.querySelector(`.modal`)

for (let card of cards) {
    card.addEventListener("click", function () {
        const classID = card.getAttribute("id");
        window.location.href = `/receitas/${classID}`
    })
}

for(let card of cards){
    const hidden = card.querySelector('.hidden')
    const secret = card.querySelector('.secret')

    secret.addEventListener("click", function(){

        if(hidden.classList.contains("active")){

            hidden.classList.remove("active")
            secret.textContent = "Remover"
        }else{
            
            hidden.classList.add("active")
            secret.textContent = "Mostrar"
        }
    })
}
