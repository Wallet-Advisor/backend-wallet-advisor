exports.up = function(knex) {
    return knex.schema.createTable("money_market", (table) => {
      table.increments();
      table.string("isp").notNullable();
      table.varchar("minimum").notNullable();
      table.varchar("current").notNullable();
      table
      .varchar("management")
      .unsigned()
      .notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("money_market");
  };
  