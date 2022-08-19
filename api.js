let fs = require('fs');
const fsPromises = require('fs').promises;
const readdir = require('node:fs/promises')
const pathUtil = require('node:path');


//validar si exciste la ruta 
const existPath = (path) => fs.existsSync(path);

//convertir ruta a absoluta
const absolutePath = (path) => pathUtil.resolve(path);

//verificar si es un directorio
const pahtIsDirectory = (absolutePath) => fs.lstatSync(absolutePath).isDirectory();

//vereificar  tipo de archivo
const verifyFileType = (absolutePath) => fs.statSync(absolutePath).isFile();

//verifica que archivos so tipo  .md
const pathIsMd = (absolutePath) => pathUtil.extname(absolutePath);

//leer directorio
const targetDir = (path) => {
  fs.promises.readdir(path, 'utf8')
    .then(filenames => {
      for (let filename of filenames) {
        console.log(filename)
      }
    })

    // If promise is rejected
    .catch(err => {
      console.log(err)
    })
}


//leer archivo
const readFile = (absolutePath) => fs.promises.readFile(absolutePath)
  .then(function (result) {
    console.log('' + result);
  })
  .catch(function (error) {
    console.log(error);
  })


//obtener files.md
const getFile = (path) => {
  let arrayFile = [];
  const pathAbsolute = absolutePath(path);
  console.log(pathAbsolute);
  if (verifyFileType(pathAbsolute) && pathIsMd(pathAbsolute) === '.md') {
    arrayFile.push(pathAbsolute)
  }
  console.log(arrayFile);
}






module.exports = {
  existPath,
  absolutePath,
  verifyFileType,
  pahtIsDirectory,
  pathIsMd,
  readFile,
  targetDir,
  getFile
};

