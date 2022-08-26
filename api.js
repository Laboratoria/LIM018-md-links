let fs = require('fs');
const path = require('path');
const marked = require('marked');
const cheerio = require('cheerio');
//console.log(cheerio);

//existsSync() => comprueba si un archivo existe, devuelve un valo booleano
//validar si exciste la ruta 
const existPath = (road) => fs.existsSync(road);


//path.resolve => resuelve una ruta y la convierte en una ruta absoluta
//convertir ruta a absoluta
const absolutePath = (road) => path.resolve(road);


//fs.statSync.isDirectory => verifica si el objeto fs describe un directorio retorna un valor booleano
//verificar si es un directorio
const pahtIsDirectory = (road) => fs.statSync(road).isDirectory();


//fs.statSync.isFile => retorna imformacion sobre la ruta del archiv, retona un valor boolena 
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




const listFile = (road) => {
  let filesArray = [];
  const absoluteRoute = absolutePath(road);
  if (verifyFileType(absoluteRoute)) {
    if (pathIsMd(absoluteRoute) === '.md') {
      filesArray.push(absoluteRoute)

    }
  } else {
    //recorrer directorio
    const items = readDir(absoluteRoute);
    items.forEach(element => {
      const pathJoin = path.join(absoluteRoute, element);
      //console.log(pathJoin);
      /*if (pathIsMd(pathJoin) === '.md') {
        files.push(pathJoin);
        files = files.concat(absoluteRoute);
        console.log(typeof pathJoin);
      } else {
        
      }*/
      const newArray = listFile(pathJoin);
      filesArray = filesArray.concat(newArray);

    })

  }

  return filesArray;
};


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


const getLink = (road) => {
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
/*let arrayLinks = []
arrayHTML.forEach(element => {
  const $ = cheerio.load(element.html);
  const links = $('a');
  $(links).each(function (i, link) {
    arrayLinks.push(
      {
        href: $(link).attr('href'),
        text: $(link).text(),
        file: element.urlFile
      }
    )
  });
})
console.log(arrayLinks);
return arrayLinks;*/



getLink('./md-link')














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
  getLink
};

