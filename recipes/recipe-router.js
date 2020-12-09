const { Router } = require('express');
const router = Router();

const {
    getRecipes,
    getShoppingList,
    getInstructions
} = require('../data/index');

router.get('/', async (req, res) => {
    const recipes = await getRecipes();
    res.status(200).json(recipes);
});

router.get('/:id/shopping-list', async (req, res) => {
    const list = await getShoppingList(req.params.id);
    res.status(200).json(list);
});

router.get('/:id/instructions', async (req, res) => {
    const steps = await getInstructions(req.params.id);
    res.status(200).json(steps);
});

module.exports = router;