'use strict'

/*
|--------------------------------------------------------------------------
| EstudianteSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class EstudianteSeeder {
  async run () {
    await Database.table('estudiantes').insert([
      {
        'nombre' : 'juan',
        'edad' : '20'
      }
    ]);
  }
}

module.exports = EstudianteSeeder
