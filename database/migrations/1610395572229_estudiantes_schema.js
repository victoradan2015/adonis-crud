'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EstudiantesSchema extends Schema {
  up () {
    this.create('estudiantes', (table) => {
      table.increments()
      table.string('nombre', 80)
      table.integer('edad', 100)
      table.timestamps()
    })
  }

  down () {
    this.table('estudiantes', (table) => {
      table.increments()
      table.string('nombre', 80)
      table.integer('edad', 100)
      table.timestamps()
    })
  }
}

module.exports = EstudiantesSchema
