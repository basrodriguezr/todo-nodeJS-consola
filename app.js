require('colors');
//const {mostrarMenu, pausa} = require('./helpers/mensajes');
const {inquireMenu,pausa} = require('./helpers/inquirer');

console.clear();

const main = async() =>{
    let opt='';

    while(opt!='0'){
        //opcion =  await mostrarMenu();
        opt =  await inquireMenu();
        
        await pausa();        
    }

    console.clear();
}

main();