# Markdown Links

![md](https://raw.githubusercontent.com/Deleina/LIM018-md-links/Deleina/mdLinks.jpg)


## Indice

- [1. Documentacion técnica de la librería](#1-resumen-del-proyecto)

- [2. Diagrama de flujo](#2-diagramas-de-flujo)

- [3. Instalación y guia de uso de la librería](#3-instalación-y-guia-de-uso-de-la-librería)

- [4. Autora](#5-Autora)



 ### 1. Documentacion técnica de la librería

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una
herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.


### 2. Diagrama de flujo

![Diagrama](https://raw.githubusercontent.com/Deleina/LIM018-md-links/main/driagrama.jpg)


### 3. Instalación de la libreria

```sh
npm i md-links-deleina
```

#### 3.2 Guia de uso de la librería

- En la terminal ingresamos el comando **md-Links** seguido de la **ruta** absoluta o relativa de la ubicación del archivo y/o carpeta en la cual se buscaran los links.

Ejemplo:

```sh
 --validate
 ```

 - Ingresando el comando **md-Links** seguido de la **ruta** y seguido del comando **--stats**, obtendremos algunos datos estadisticos(total de links y cantidad de links unicos).

 Ejemplo:
 
  ```sh
  --stats
  ```

  - Ingresando el comando **md-Links** seguido de la **ruta** y seguido de los comandos **--stats --validate** o **--validate --stats**, obtendremos la cantidad total de links que encontremos en ese archivo, el total de links unicos encontrados y el total de links rotos.

  Ejemplo:
  
```sh
  --stats --validate
 ```

  ### 4. Autora

- Deleina Llamocca 
