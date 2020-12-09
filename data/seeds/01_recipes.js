exports.seed = async function(knex) {
  await knex('recipes').insert([
      { name: 'Apple Pie' },
      { name: 'Pepperoni Pizza' },
      { name: 'Biscuts and Gravy' }
  ])
};
