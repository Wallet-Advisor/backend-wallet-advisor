exports.up = function(knex) {
    return knex.schema.createTable("sub", (table) => {
      table.increments();
      table.varchar("address").notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("sub");
  };
  