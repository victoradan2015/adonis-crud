'use strict'

/*
|--------------------------------------------------------------------------
| DataBaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const DirectorioSeeder = use('./EstudianteSeeder')

class DataBaseSeeder {
  async run () {
    console.log('paraFactory')
    await Factory
    .model('App/Models/Estudiante')
    .createMany(4)
  }
}

module.exports = DataBaseSeeder
