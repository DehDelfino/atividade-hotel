/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("Quarto", table =>{
    
    table.string("id",255).primary()
    
   
    table.string('quantidade de cama', 40).notNullable()
    table.int('numero', 9).unique()
    table.int('andar', 80).unique()
    table.boolean("disponível").notNullable().default(0)

    
  
  })};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("psicologo")
};
