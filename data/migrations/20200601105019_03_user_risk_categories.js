exports.up = function(knex) {
    return knex.schema.createTable("user_risk_category", (table) => {
      table.increments();
      table.integer('user_id').unsigned().notNullable();
      table.integer("risk_score").notNullable();
      table.integer("risk_category").notNullable();
      table
        .foreign("user_id")
        .references("users.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
  };
  
exports.down = function(knex) {
return knex.schema.dropTableIfExists("user_risk_category");
};
