exports.up = function(knex) {
    return knex.schema.table('users', table => {
        table.string("middle_name");
        table.string("last_name");
        table.string("address");
        table.varchar("phone_number");
        table.string("bank_name");
        table.varchar("account_number");
        table.varchar("bvn");
        table.varchar("id_type");
        table.varchar("id_number");
        table.varchar("mothers_maiden");
        table.varchar("dob");
        table.varchar("occupation");
        table.varchar("company_name");
        table.varchar("company_address");
        table.varchar("nationality");
        table.varchar("next_of_kin");
        table.varchar("address_of_next_of_kin");
        table.varchar("phone_number_of_next_of_kin");
        table.varchar("relationship");

      });
    };
  exports.down = function(knex) {
    return knex.schema.table('users', table => {
      table.dropColumns('middle_name','last_name', 'middle_name',
      'address', 'phone_number', 'bank_name', 'account_number', 
      'bvn', 'id_type', 'id_number', 'mothers_maiden', 'dob',
      'occupation', 'company_name', 'company_address', 'nationality',
      'next_of_kin', 'address_of_next_of_kin', 'phone_number_of_next_of_kin',
      'relationship');
    });
  };