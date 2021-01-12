'use strict'

const Estudiante = use('App/Models/Estudiante')
const {validateAll} = use ('Validator')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with estudiantes
 */
class EstudianteController {

  //el index muestra todos lo registros de la bd
  async index ({ request, response, view }) {
    return await Estudiante.all();
  }
  /**
   * Create/save a new estudiante.
   * POST estudiantes
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  //AGREGAR ESTUDIANTE
  async store ({ request, response }) {
    const input = request.all()
         //validacion
         const validation = await validateAll(input, {
             'nombre':'required|min:2|max:200',
             'edad':'required|min:1|max:2'
         })
         if(validation.fails()){
             return response.status(400).json(validation.messages())
         }
                   
        if (Estudiante.create(input)){
        return response.status(201).json(['Estudiante agregado'])
        }
  }

  async show ({ params, request, response }) {
  }

//edita por id
  async update ({ request, response, params=id }) {
    const input = request.all()

         //validacion
         const validation = await validateAll(input, {
              'nombre':'required|min:2|max:200',
              'edad':'required|min:1|max:2'
         })
         if(validation.fails()){
             return response.status(400).json(validation.messages()) 
         }

        await Estudiante.query().where('id',params.id).update(input)

        if (Estudiante.query().where('id',params.id).update(input)){
        return response.status(200).json(['Editado',await Estudiante.findOrFail(params.id)])
        }
  }

  /**
   * Delete a estudiante with id.
   * DELETE estudiantes/:id
   */
  async destroy ({ response,params=id }) {
  const Estudiantes = await Estudiante.findOrFail(params.id)
    
        await Estudiantes.delete()

        if (Estudiantes.delete()){
            return response.status(200).json(['Eliminado'])
        }
  }
}

module.exports = EstudianteController
