let readlineSync = require('readline-sync'),
chalk = require('chalk');
 console.log(chalk.black.bold.bgBlue('              Superficie de un triangulo            '));
 let base = readlineSync.questionInt("Ingrese la base: ");
 console.log(base);
 let altura = readlineSync.questionInt("Ingrese la altura: ");
 console.log(altura);
 console.log('El resutado de la Base X la Altura es igual a: ')
 console.log(chalk.black.bold.bgYellow(        (base * altura)/2          ));
