exports.up = function(knex) {
    return knex.schema.createTable('risk_categories', table => {
      table.increments();
      table.integer('score').notNullable();
      table.string('category').notNullable();
    });
  };
  
exports.down = function(knex) {
return knex.schema.dropTableIfExists('risk_categories');
};