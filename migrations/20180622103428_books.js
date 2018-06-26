
exports.up = function(knex) {
  return knex.schema.createTable('books', (table) => {
    table.increments();
    table.string('image').notNullable().defaultTo('');
    table.string('title').notNullable().defaultTo('');
    table.string('author').notNullable().defaultTo('');
    table.string('year').notNullable().defaultTo('');
    table.string('pages').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('books');
};
