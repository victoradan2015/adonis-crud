'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hola world en JSON' }
})

Route.resource('estudiantes', 'EstudianteController').apiOnly();

Route.post('estudiantes/agregar','EstudianteController.store').middleware(['edad'])//middleware edad mayor a 10 para hacer esta accion
//para editar desde un id
Route.put('estudiantes/:id','EstudianteController.update')
//eliminar
Route.delete('estudiantes/:id','EstudianteController.destroy')