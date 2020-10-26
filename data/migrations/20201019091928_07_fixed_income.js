exports.up = function(knex) {
    return knex.schema.createTable("fixed_income", (table) => {
      table.increments();
      table.string("isp").notNullable();
      table.varchar("minimum").notNullable();
      table.varchar("year").notNullable();
      table
      .varchar("management")
      .unsigned()
      .notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("fixed_income");
  };
  