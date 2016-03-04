
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tickets', function (t) {
    t.increments();
    t.string('name');
    t.string('email');
    t.string('issue');
    t.boolean('is_open');
    t.integer('priority');
    t.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tickets');
};
