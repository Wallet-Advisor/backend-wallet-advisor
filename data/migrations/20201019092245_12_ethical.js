exports.up = function(knex) {
    return knex.schema.createTable("ethical", (table) => {
      table.increments();
      table.string("isp").notNullable();
      table.integer("year").notNullable();
      table
      .integer("management")
      .unsigned()
      .notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("ethical");
  };
  