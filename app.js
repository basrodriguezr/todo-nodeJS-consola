require('colors');
//const {mostrarMenu, pausa} = require('./helpers/mensajes');
const {inquireMenu,pausa} = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');


console.clear();

const main = async() =>{
    let opt='';
    const tareas = new Tareas();
    
    while(opt!='0'){
        //opcion =  await mostrarMenu();
        opt =  await inquireMenu();
        const tarea = new Tarea('Estudiar NODE');
       

        tareas.listado[tarea.id] = tarea;
        await pausa();        
    }

    console.clear();
}

main();