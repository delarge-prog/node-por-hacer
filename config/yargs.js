const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcoón de la tarea por hacer'
};
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea por hacer'

};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado completado de una tarea', { descripcion, completado })
    .command('listar', 'muestra listado de tareas', { completado })
    .command('borrar', 'elimina un elemento', { descripcion })
    .help()
    .argv

module.exports = {
    argv
}