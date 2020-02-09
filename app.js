const argv = require('./config/yargs').argv;
//argv.argv;
const porHacer = require('./por-hacer/por-hacer');


let comando = argv._[0];
console.log(comando)
switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.listar(argv.completado);
        for (let tarea of listado) {
            console.log("=====Por Hacer=====");
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log("=====Por Hacer=====");
        }
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrando = porHacer.borrar(argv.descripcion);
        console.log(borrando)
        break;

    default:
        console.log('comando no es reconocido');
}