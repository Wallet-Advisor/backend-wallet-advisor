exports.up = function(knex) {
    return knex.schema.createTable("sukuk", (table) => {
      table.increments();
      table.string("isp").notNullable();
      table.integer("2024").notNullable();
      table.integer("2025").notNullable();
      table.integer("2020").notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("sukuk");
  };
  