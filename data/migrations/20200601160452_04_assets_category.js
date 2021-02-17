exports.up = function(knex) {
  return knex.schema.createTable("assets_category", (table) => {
    table.increments();
    table
      .integer("category_id")
      .unsigned()
      .notNullable();
    table.string("assets_name").notNullable();
    table.integer("assets_weighting").notNullable();
    table
      .foreign("category_id")
      .references("risk_categories.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("assets_category");
};
