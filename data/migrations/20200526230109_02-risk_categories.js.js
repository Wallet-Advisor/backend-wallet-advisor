exports.up = function(knex) {
    return knex.schema.createTable('risk_categories', table => {
      table.increments();
      table.string('risk_score').unique();
      table.string('risk_category').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('risk_categories');
  };