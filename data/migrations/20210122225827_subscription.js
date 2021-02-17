
exports.up = function(knex) {
  return knex.schema.createTable("subscription", (table) => {
      table.increments();
      table.string("email").unique()
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("subscription")
};
