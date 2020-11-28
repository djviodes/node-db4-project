const db = require('./db-config');

const getRecipes = () => {
    return db('recipes');
};

const getShoppingList = recipe_id => {
    return db('recipes_ingredients as r_i')
        .where({recipe_id})
        .join('ingredients as i', 'r_i.ingredient_id', '=', 'i.id')
        .select('i.*');
};

const getInstructions = (recipe_id) => {
    return db('recipes_steps as r_s')
        .innerJoin('steps as s', 'r_s.steps_id', '=', 's.id')
        .where('r_s', recipe_id)
        .select('s.*');
};

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}