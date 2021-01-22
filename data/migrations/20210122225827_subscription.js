
exports.up = function(knex) {
  return knex.schema.createTable("subscription", (table) => {
      table.increments();
      table.string("email").unique().notNullable()
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("subscription")
};
