'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Estudiante {

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response }, next) {
    if (request.header('edad') >= 10){
      await next()
   }
   else{
   return response.status(400).json({mensaje:'Cantidad minima (edad) en el header 10'})
  }
  }
}

module.exports = Estudiante
