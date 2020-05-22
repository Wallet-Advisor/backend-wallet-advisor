exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
      table.increments();
      table.string('username').unique();
      table.string('password').notNullable();
      table
        .string('email')
        .unique()
        .notNullable();
      table.string('fullname');
      table.boolean('admin');
      table.specificType('profile_image_url', 'text ARRAY');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
  };
  