import knex from 'knex';

export const up = async (knex: knex) => {
  return knex.schema.createTable('class_schedule', (table) => {
    table.increments('id').primary();

    table.integer('week_day').notNullable();
    table.integer('from').notNullable();
    table.integer('to').notNullable();

    table
      .integer('class_id')
      .notNullable()
      .references('id')
      .inTable('classes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

export const down = async (knex: knex) => {
  return knex.schema.dropTable('class_schedule');
};
