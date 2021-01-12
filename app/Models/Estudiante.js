'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Estudiante extends Model {
    static get table(){
        return 'estudiantes';
    }
    static get hidden(){
        return ['created_at', 'updated_at']
    }
}

module.exports = Estudiante
