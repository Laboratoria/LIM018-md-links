#!/usr/bin/env nodo
const mdLinks = require('./index.js');
const index = require('./index.js');
//toDo 
//solo indetificar  el archivo markdown 
//(a partir de la ruta que recibe como argumento)
//imprimir linkque vaya encontrando 

//optiones
//--validate 
//si se pasa la opcion  --validate 


const [, , ...inputPath] = process.argv;

const terminalPath = inputPath[0];
//const terminalOpts = inputPath[1];

const haveValidate = inputPath.includes('--validate');

const haveStats = inputPath.includes('--stats');

if (!haveValidate && !haveStats) {
    mdLinks(terminalPath, { validate: false })
        .then((res) =>
            res.forEach(element => {
                console.log(`\n ${element.file}, \n ${element.text}, \n ${element.href}`);
            }));
} else if (haveValidate && !haveStats) {
    mdLinks(terminalPath, { validate: true })
        .then((res) =>
            res.forEach(element => {
                console.log(`\n ${element.file}, \n ${element.href}, \n ${element.message}, \n ${element.status}, \n ${element.text}`);
            }));
} else if (!haveValidate && haveStats) {
    mdLinks(terminalPath)
        .then((res) => {
            console.log(`Total: ${res.length}`)
            const acumulator = []
            res.forEach((element) => {
                acumulator.push(element.href);
            })
            const unique = [...new Set(acumulator)]
            console.log(`Unique: ${unique.length}`);
        });
} else if (haveStats && haveValidate) {
    mdLinks(terminalPath, { validate: true })
        .then((res) => {
            console.log(`Total: ${res.length}`)
            const acumulatorUnique = []
            const acumulatorBroken=[]
            res.forEach((element) => {
                acumulatorUnique.push(element.href);
                if(element.status !== 200){
                    acumulatorBroken.push(element);
                }
            })
            const unique = [...new Set(acumulatorUnique)]
            console.log(`Unique: ${unique.length}`);
           console.log(`Broken: ${acumulatorBroken.length}`);


        });
}









//options(terminalPath, terminalOpts);

