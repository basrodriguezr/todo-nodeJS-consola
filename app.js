require('colors');
const {mostrarMenu, pausa} = require('./helpers/mensajes');
//const {inquireMenu} = require('./helpers/inquirer');

console.clear();

const main = async() =>{
    let opcion='';

    while(opcion!='0'){
       opcion =  await mostrarMenu();

        if(opcion!=='0') await pausa();        
    }

    console.clear();
}

main();