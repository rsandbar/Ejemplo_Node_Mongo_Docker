# Ejemplo_Node_Mongo_Docker
Proyecto creado para la evaluación del Bootcamp Tecnologías para el desarrollo web

Pregunta 1
Se hizo la instalación de Visual Studio Code. Se adjunta una imagen del IDE en la carpeta Imgs: archivo VSC.png

Pregunta 2
Se creó el perfil rsandbar

Pregunta 3
Se creo el repo personal Ejemplo_Node_Mongo_Docker con perfil público. La URL es https://github.com/rsandbar/Ejemplo_Node_Mongo_Docker

Pregunta 4
Se creo la imagen de mongoDB en un contenedor de Docker. 
Para la persistencia, ejecuté el siguiente comando:
docker run -d -p 27018:27018 --name MongoData -v mongo-data:/data/db mongo

Se creo la base de datos FullStack y la colección sinadefs. Para los puntos a y b, descargué el archivo csv del Sistema Nacional de Defunciones del Perú, obtenido de la página de datos abiertos del gobierno del Perú. Se cargaron 530 documentos. El archivo csv lo encontrará en la carpeta Datos con el nombre fallecidos_sinadef_final_muestra.csv.

Pregunta 5
Se creó la API que contiene los siguientes archivos/carpetas:
src: Carpeta principal que contiene los archivos:
database.js => Usé mongoose para poder conectarme a la base de datos Fullstack (Pregunta 5a)
index.js => Archivo principal en el que se establecieron las consultas de los puntos 5b, 5c, 5d y 5e. Estas consultas se ejecutan en las rutas como por consola (funciones)
modeloSinadef.js => archivo en que se define el esquema de la colección sinadefs de la base de datos Fullstack en MongoDB.
routes: Carpeta que contiene el archivo:
index.routes.js => archivo creado para comprobar que la API trabaja correctamente y publica un mensaje al hacer un get en la ruta principal


Pregunta 6
Se dockerizó tanto la API como la base de datos en un solo contenedor. Para ello se definieron los archivos:
dockerfile => En este archivo se definen que comandos ejecuté para la configuración de la imagen de node (versión, creación de carpeta con la API, directorio de trabajo, el puerto habilitado, etc.)
docker-compose.yml => Este archivo sirve para definir y ejecutar aplicaciones de Docker de varios contenedores. En este caso, el docker para la API y el docker para la base de datos. Se definieron los servicios, contenedores, puertos, links, volúmenes e imágenes con las que trabajan dichos contenedores.

Pregunta 7
La URL del repo público es https://github.com/rsandbar/Ejemplo_Node_Mongo_Docker



