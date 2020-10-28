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

function addIngredient() {
    const ingredients = document.querySelector("#item");
    const fieldContainer = document.querySelectorAll(".recipeIngredients");
  
    // Realiza um clone do último ingrediente adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
  
    // Não adiciona um novo input se o último tem um valor vazio
    if (newField.children[0].value == "") return false;
  
    // Deixa o valor do input vazio
    newField.children[0].value = "";
    ingredients.appendChild(newField);
  }
  
  document
    .querySelector(".add-ingredient")
    .addEventListener("click", addIngredient);

function addStep() {
        const ingredients = document.querySelector("#itemPrep");
        const fieldContainer = document.querySelectorAll(".recipeSteps");
      
        // Realiza um clone do último ingrediente adicionado
        const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
      
        // Não adiciona um novo input se o último tem um valor vazio
        if (newField.children[0].value == "") return false;
      
        // Deixa o valor do input vazio
        newField.children[0].value = "";
        ingredients.appendChild(newField);
      }
      
      document
        .querySelector(".add-step")
        .addEventListener("click", addStep);
