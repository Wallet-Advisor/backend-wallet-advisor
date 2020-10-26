exports.up = function(knex) {
    return knex.schema.createTable("sukuk", (table) => {
      table.increments();
      table.string("isp").notNullable();
      table.varchar("2024").notNullable();
      table.varchar("2025").notNullable();
      table.varchar("2020").notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("sukuk");
  };
  