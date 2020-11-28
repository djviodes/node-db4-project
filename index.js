const server = require('./api/server');

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`\n*** API is running on port ${PORT} ***\n`);
});

{/*
exports.up = async function(knex) {
    await knex.schema.createTable('recipes', (table) => {
        table.increments('id')
        table.text('name').notNullable()
    });

    await knex.schema.createTable('ingredients', (table) => {
        table.increments('id')
        table.text('name').notNullable()
        table.integer('quantity').notNullable()
    });

    await knex.schema.createTable('steps', (table) => {
        table.increments('id')
        table.text('instructions').notNullable()
    });

    await knex.schema.createTable('recipes_ingredients', (table) => {
        table.integer('recipe_id')
            .references('id')
            .inTable('recipes')
        table.integer('ingredient_id')
            .references('id')
            .inTable('ingredients')
        table.primary(['recipe_id', 'ingredient_id'])
    });

    await knex.schema.createTable('recipes_steps', (table) => {
        table.integer('recipe_id')
            .references('id')
            .inTable('recipes')
        table.integer('step_id')
            .references('id')
            .inTable('steps')
        table.primary(['recipe_id', 'step_id'])
    });
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('steps_recipes')
    await knex.schema.dropTableIfExists('recipes_ingredients')
    await knex.schema.dropTableIfExists('steps')
    await knex.schema.dropTableIfExists('ingredients')
    await knex.schema.dropTableIfExists('recipes')
};
*/}