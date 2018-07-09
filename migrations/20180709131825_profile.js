
exports.up = function(knex, Promise) {
  return knex.schema.createTable('profile', (table) => {
    table.increments();
    table.string('username');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('profile');
};
