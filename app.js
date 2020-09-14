const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./TO-DO/to-do');

console.log(argv);

let comando = argv._[0];


switch (comando) {
    case 'crear':
        console.log('Crear TODO');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        console.log('Mostrar todas las tareas');
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('********* TO - DO *********'.green);
            console.log(tarea.descripcion);
            console.log('Completado: ', tarea.completado);
            console.log('***************************'.green);
        }
        break;
    case 'actualizar':
        let tareaActualizada = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log('Actualiza estado de una tarea', tareaActualizada);
        break;
    case 'borrar':
        let tareas = porHacer.borrar(argv.descripcion);
        console.log(tareas);
        break;
    default:
        console.log('Opción no reconocida!');
        break;


}