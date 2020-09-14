const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca estado de completado de la tarea'
}

const optsCrear = {
    descripcion
}

const optsBorrar = {
    descripcion
}

const optsActualizar = {
    descripcion,
    completado
}


const argv = require('yargs')
    .command('crear', 'Crea un elemento en TO-DO', optsCrear)
    .command('borrar', 'Borra un elemento de TO-DO', optsBorrar)
    .command('actualizar', 'Actualizar el estado completado de una tarea', optsActualizar)
    .help()
    .argv;


module.exports = {
    argv
}