let fs = require('fs');
const path = require('path');
const marked = require('marked');
const cheerio = require('cheerio');
const fetch = require('node-fetch');
//console.log(fetch);

//existsSync() => comprueba si un archivo existe, devuelve un valo booleano
//validar si exciste la ruta 
const existPath = (road) => fs.existsSync(road);


//path.resolve => resuelve una ruta y la convierte en una ruta absoluta
//convertir ruta a absoluta
const absolutePath = (road) => path.resolve(road);


//fs.statSync.isDirectory => verifica si el objeto fs describe un directorio retorna un valor booleano
//verificar si es un directorio
const pahtIsDirectory = (road) => fs.statSync(road).isDirectory();


//fs.statSync.isFile => retorna imformacion sobre la ruta del archivo, retona un valor booleno
//vereificar  tipo de archivo
const verifyFileType = (absolutePath) => fs.statSync(absolutePath).isFile();

// path.extname => obtiene la porcin de extension de una ruta de archivo
//verifica que archivos son tipo  .md
const pathIsMd = (road) => path.extname(road);

//fs.readdirSyn => lee el contenido de un directorio retorna un array de archivos u objetos
//leer directorio
const readDir = (road) => fs.readdirSync(road);


//fs.readFileSync => lee archivos y devuelve su contenido
//leer archivo
const readFile = (absolutePath) => fs.readFileSync(absolutePath, 'utf-8');

//array de archivos
const listFile = (road) => {
  let filesArray = [];
  const absoluteRoute = absolutePath(road);

  if (!existPath(absoluteRoute)) {
    return filesArray;
  }
  if (verifyFileType(absoluteRoute)) {
    if (pathIsMd(absoluteRoute) === '.md') {
      filesArray.push(absoluteRoute)
    }
  } else {
    //recorrer directorio
    const items = readDir(absoluteRoute);
    items.forEach(element => {
      const pathJoin = path.join(absoluteRoute, element);
      const newArray = listFile(pathJoin);
      filesArray = filesArray.concat(newArray);

    })
  }

  return filesArray;
};

//console.log(listFile('./idex.js'));

//lee los archivos md y retorna un objeto html y url
const mdConvertHTML = (road) => {
  let arrayObjects = [];
  const newArrayFile = listFile(road);
  newArrayFile.forEach(urlFile => {
    const readMd = readFile(urlFile);
    arrayObjects.push({
      html: marked.parse(readMd),
      urlFile: urlFile
    });
  });
  return arrayObjects;
}


//obtiene los links text y file en  forma de objeto 
const getLinks = (road) => {
  let arrayObj = [];
  const urlAndHTML = mdConvertHTML(road);
  urlAndHTML.forEach(element => {
    const $ = cheerio.load(element.html);
    const links = $('a');
    $(links).each(function (i, link) {
      arrayObj.push({
        href: $(link).attr('href'),
        text: $(link).text(),
        file: element.urlFile
      });
    });
  });
  return arrayObj;
};



//obtiene los estados de los links
const linksStatus = (road) => {
  const arrayStatus = getLinks(road).map((link) => fetch(link.href)
    .then((response) => {
      return {
        href: link.href,
        text: link.text,
        file: link.file,
        status: response.status,
        message: response.status >= 200 && response.status < 400 ? 'Ok' : 'Fail',
      }
    })
    .catch((error) => ({
      href: link.href,
      text: link.text,
      file: link.file,
      status: 'Not found' + " " + error,
      message: 'Fail',
    })));
  //console.log(arrayStatus);

  return Promise.all(arrayStatus);

}

//linksStatus('./md-linkError').then((ele) => console.log(ele)).catch((err) => console.log(err));



module.exports = {
  existPath,
  absolutePath,
  verifyFileType,
  pahtIsDirectory,
  pathIsMd,
  readFile,
  readDir,
  listFile,
  mdConvertHTML,
  getLinks,
  linksStatus
};
