require('colors');
//const {mostrarMenu, pausa} = require('./helpers/mensajes');
const {inquireMenu,pausa,leerInput} = require('./helpers/inquirer');
//const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');


console.clear();

const main = async() =>{
    let opt='';
    const tareas = new Tareas();

    while(opt!='0'){
        //opcion =  await mostrarMenu();
        opt =  await inquireMenu();
        //const tarea = new Tarea('Estudiar NODE');
       
        switch (opt) {
            case '1':
                const desc = await leerInput('Descripción: ');
                //console.log(desc);
                tareas.crearTarea(desc);
            break;
            
            case '2':
                console.log(tareas.listado);
            break;
        }
        //tareas.listado[tarea.id] = tarea;
        await pausa();        
    }

    console.clear();
}

main();