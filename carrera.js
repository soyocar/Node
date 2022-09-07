let readlineSync = require('readline-sync'),
vueltas = 4, //cantidad de vueltas
tiempototal =0, //inicializo el tiempo total
chalk = require('chalk'); //paquete para formatos
console.log(chalk.black.bold.bgBlue('              Tiempo de Vueltas            '));
 for(i=1; i<= vueltas; i++ ){
    tiempo = readlineSync.questionInt("Ingrese eltiempo de la vuelta numero " + i + " ");
    console.log(chalk.black.bold.bgGreen('El tiempo de la vuelta numero: '+ i + ' es ' + tiempo));
    tiempototal+=tiempo;

 }
 console.log('--------------------------------------------')
 console.log(chalk.black.bold.bgCyan('El tiempo total de todas las vueltas es: ' + tiempototal));
 console.log('--------------------------------------------')
 console.log('--------------------------------------------')
 console.log(chalk.black.bold.bgRed('El promedio de vuelta es: ' +         (tiempototal/vueltas)));
 console.log('--------------------------------------------')
 console.log('--------------------------------------------')
 