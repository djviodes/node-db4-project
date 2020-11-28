exports.seed = async function(knex) {
  await knex('ingredients').insert([
  { name: "gram of butter", quantity: 2 },
  { name: "ts of salt", quantity: 2 },
  { name: "lb of pepperoni", quantity: 1 },
  { name: 'cups of flour', quantity: 4},
  { name: "fl oz of marinara sauce", quantity: 4 },
  { name: "gram of dough", quantity: 2 },
  { name: "gram of sugar", quantity: 1 },
  { name: "cups of milk", quantity: 3 },
  ]);
};
