
exports.up = function(knex, Promise) {
  return knex.schema.table('tickets', function(table) {
    table.dropColumn('is_open');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('tickets', function(table) {
    table.boolean('is_open');
  });
};
