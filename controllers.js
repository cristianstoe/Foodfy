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
    const recipeIndex = req.params.id;
  
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
    console.log(keys)
    // for (key of keys) {
    //     if (req.body[key] == ``) {
    //         return res.send(`Preencha todos os campos`)
    //     }
    // }


    req.body.id = Number(data.recipes.length)

    let { id, recipe_url, name, ingredients, preparation, moreInfo} = req.body

    data.recipes.push({
        id,
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
    const id  = req.params.id

    const foundRecipe = data.recipes.find(function (recipe) {
        return recipe.id == id
    })

    if (!foundRecipe) return res.send(`Recipe not found`)
    
    return res.render(`edit`, {recipe: foundRecipe})

    // return res.send (`Formulario edicao receita // O Id fornecido é ${id}`)
}

exports.put = function (req, res) {
    const { id } = req.body
    let index = 0

    const foundRecipe = data.recipes.find(function (recipe, foundIndex) {
        if( id == recipe.id ){
            index = foundIndex
            return true
        }

    })

    if (!foundRecipe) return res.send(`recipe not found`)

    const recipe = {
        ...foundRecipe,
        ...req.body,
        id: Number(req.body.id)
    }

    data.recipes[index] = recipe

    fs.writeFile(`data.json`, JSON.stringify(data, null, 2), function (err) {
        if (err) return res.send(`Write file error`)
        return res.redirect(`/members/${id}`)

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
