exports.up = function(knex) {
    return knex.schema.createTable("dollar_funds", (table) => {
      table.increments();
      table.varchar("isp").notNullable();
      table.varchar("minimum").notNullable();
      table.varchar("current").notNullable();
      table
      .varchar("thirty")
      .unsigned()
      .notNullable();
      table
      .varchar("ninety")
      .unsigned()
      .notNullable();
      table
      .varchar("one")
      .unsigned()
      .notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("dollar_funds");
  };
  