const express = require('express');
const helmet = require('helmet');

const RecipeRouter = require('../recipes/recipe-router');
const IngredientRouter = require('../ingredients/ingredient-router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/recipes', RecipeRouter);
server.use('/api/ingredients', IngredientRouter);

module.exports = server;