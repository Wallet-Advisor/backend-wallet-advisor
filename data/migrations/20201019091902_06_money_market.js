exports.up = function(knex) {
    return knex.schema.createTable("money_market", (table) => {
      table.increments();
      table.string("isp").notNullable();
      table.integer("minimum").notNullable();
      table.integer("current").notNullable();
      table
      .integer("management")
      .unsigned()
      .notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("money_market");
  };
  