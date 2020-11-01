const fs = require(`fs`)
const infos = require(`./data`)
const data = require(`./data.json`)
const { Z_DATA_ERROR } = require("zlib")

exports.home = function (req, res) {
    return res.render(`home`, { items: infos })
}

exports.about =  function (req, res) {
    return res.render(`about`, { items: infos })
}

exports.recipes =  function (req, res) {
    return res.render(`recipes`, { items: infos })
}

exports.recipeinfo =  function (req, res) {
    const receitas = [];
    const recipeIndex = req.params.index;
  
    return res.render(`recipeinfo`, {items: infos[recipeIndex]})
  }

  // ADM //

exports.index = function (req, res) {
    return res.render(`index`, {recipes: data})
}

exports.create = function (req, res) {
    return res.render(`create`, { items: infos })
}

exports.show = function(req, res){
    const id = req.params.id

    return res.send (`Mostrar receita // O Id fornecido é ${id}`)
}

exports.edit = function (req, res){
    return res.send(`Formulario de edicao`)
}


exports.post = function(req, res){
    const keys = Object.keys(req.body)
    for (key of keys) {
        if (req.body[key] == ``) {
            return res.send(`Preencha todos os campos`)
        }
    }

    let { recipe_url, name, ingredients, preparation, moreInfo} = req.body

    data.recipes.push({
        recipe_url,
        name,
        ingredients,
        preparation,
        moreInfo,
    })

     // escrever no data
     fs.writeFile(`data.json`, JSON.stringify(data, null, 2), function (err) {
        if (err) {
            return res.send(`Write file error`)
        }
        else {
            return res.redirect(`/`)
        }

    })


}

// exports.delete = function (req, res) {
//     const id = req.params.id
    
//     const filteredRecipe = data.recipes.filter(function(recipe){
//         return recipe.id != id
//     })
    
    
//     data.recipes = filteredRecipe
    
//     fs.writeFile(`data.json`, JSON.stringify(data, null, 2), function (err) {
//         if (err) return res.send(`Write file error`)
//         return res.redirect(`/`)
    
//     })
    
    
//     }
