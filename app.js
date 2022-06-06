require('colors');
const { guardarDB,leerDB } = require('./helpers/guardarArchivo');
//const {mostrarMenu, pausa} = require('./helpers/mensajes');
const {
    inquireMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoCheckList
} = require('./helpers/inquirer');
//const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');


//console.clear();

const main = async() =>{
    let opt='';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if(tareasDB){
        tareas.cargarTareasFromArray(tareasDB);
    }

    //await pausa();  

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
                tareas.listadoCompleto();
            break;

            case '3':
                tareas.listarPendientesCompletadas(true);
            break;
            
            case '4':
                tareas.listarPendientesCompletadas(false);
            break;

            case '5':
               const ids = await mostrarListadoCheckList(tareas.listadoArr);

               console.log(ids);

               break;
            
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr);
                
                if(id !== '0'){
                    const ok = await confirmar('¿Está seguro que desea borrar?')

                    if(ok){
                        tareas.borrarTarea(id);
                        console.log('Tarea Borrada');
                    }
                }               
                
            break;
        }

        guardarDB(tareas.listadoArr);

        //tareas.listado[tarea.id] = tarea;
        await pausa();        
    }

    console.clear();
}

main();