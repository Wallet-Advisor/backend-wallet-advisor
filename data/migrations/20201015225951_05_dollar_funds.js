exports.up = function(knex) {
    return knex.schema.createTable("dollar_funds", (table) => {
      table.increments();
      table.string("isp").notNullable();
      table.integer("minimum").notNullable();
      table.integer("current").notNullable();
      table
      .integer("thirty")
      .unsigned()
      .notNullable();
      table
      .integer("ninety")
      .unsigned()
      .notNullable();
      table
      .integer("one")
      .unsigned()
      .notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("dollar_funds");
  };
  