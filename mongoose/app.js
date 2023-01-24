const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/recipesDB", { useNewUrlParser: true})

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  instructions: { type: String, required: true },
  ingredients: [{
    name: { type: String, required: true },
    amount: { type: Number, required: true }
  }]
});

const Recipe = mongoose.model('Recipe', recipeSchema);

const recipe = new Recipe({
  name: "Spaghetti Bolognese",
  instructions: "Cook the spaghetti according to package instructions. In a separate pan, brown the ground beef and add canned tomatoes, tomato paste, and spices. Serve the meat sauce over the cooked spaghetti.",
  ingredients: [
    { name: "Spaghetti", amount: 8 },
    { name: "Ground beef", amount: 1 },
    { name: "Canned tomatoes", amount: 28 },
    { name: "Tomato paste", amount: 2 },
    { name: "Salt", amount: 1 },
    { name: "Pepper", amount: 1 }
  ]
});

recipe.save((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Recipe saved successfully");
  }
});
