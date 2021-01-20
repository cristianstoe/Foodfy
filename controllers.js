const fs = require(`fs`)
const infos = require(`./data`)
const data = require(`./data.json`)
const { Z_DATA_ERROR } = require("zlib")

exports.home = function (req, res) {
   
    return res.render(`home`, { items: data.recipes })
}

exports.about =  function (req, res) {
    return res.render(`about`, { items: data.recipes })
}

exports.recipes =  function (req, res) {
    return res.render(`recipes`, { items: data.recipes })
}

exports.recipeinfo =  function (req, res) {
    // const receitas = [];
    const recipeIndex = req.params.index;
  
    return res.render(`recipeinfo`, {items: data.recipes[recipeIndex]}) 
  }

  // ADM //

exports.index = function (req, res) {
    return res.render(`index`, {recipes: data.recipes})
}

exports.create = function (req, res) {
    return res.render(`create`, { items: data.recipes })
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

exports.show = function(req, res){
    const id = req.params.id

    return res.send (`Mostrar receita // O Id fornecido é ${id}`)
}

exports.edit = function (req, res){
    const { id } = req.params.id

    const foundRecipe = data.recipes.find(function (recipe) {
        return recipe.id == id
    })

    if (!foundRecipe) return res.send(`Recipe not found`)
    
    return res.render(`edit`, {recipe: foundRecipe})
}

exports.put = function (req, res) {
    const { id } = req.body
    let index = 0

    const foundRecipe = data.members.find(function (recipe, index) {
        if( id == recipe.id ){
            index = foundIndex
            return true
        }
    })

    if (!foundRecipe) return res.send(`Recipe not found`)

    const recipe = {
        ...foundRecipe,
        ...req.body
    }

    data.instructors[index] = recipe

    fs.writeFile(`data.json`, JSON.stringify(data, null, 2), function (err) {
        if (err) return res.send(`Write file error`)
        return res.redirect(`/receitas/${id}`)

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
