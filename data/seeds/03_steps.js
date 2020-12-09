exports.seed = async function(knex) {
  await knex('steps').insert([
      { instructions: 'Cut the Pepperoni'},
      { instructions: "toss dough" },
      { instructions: "Add flour and salt in pan with oil and add milk as needed to thin" },
      { instructions: "stir contents" },
      { instructions: "Cut Apples" },
      { instructions: "Stir apples with cinnimon and sugar" },
      { instructions: "Place apples in pan with dough already underneth and cook" }
  ]);
};