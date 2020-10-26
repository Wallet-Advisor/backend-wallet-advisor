exports.up = function(knex) {
    return knex.schema.createTable("shariah", (table) => {
      table.increments();
      table.string("isp").notNullable();
      table.varchar("year").notNullable();
      table
      .varchar("management")
      .unsigned()
      .notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("shariah");
  };
  