# Documentación de la Aplicación de Subsecuencia
Común Más Larga

Esta documentación proporciona una descripción general y detalles de uso tanto para
el back-end (API) como para el front-end de la aplicación de Subsecuencia Común Más
Larga. La aplicación permite calcular la subsecuencia común más larga entre dos
cadenas de texto.

## Backend (API)

Descripción General
El backend de la aplicación es una API que realiza el cálculo de la subsecuencia común
más larga entre dos cadenas de texto. Utiliza un algoritmo de programación dinámica
para encontrar esta subsecuencia y proporciona el resultado a través de solicitudes
HTTP.

### Uso Básico
Para utilizar la API, sigue estos pasos:
1. Inicia el servidor Express que proporciona la API. El servidor escuchará en el
puerto 3000 por defecto.
2. Realiza una solicitud GET a la ruta /lcs con dos cadenas de texto como
parámetros str1 y str2.
3. La API calculará la subsecuencia común más larga entre las dos cadenas y la
enviará como respuesta.
Rutas Disponibles
Ruta Principal ("/")
 Método: GET
 Descripción: Muestra un mensaje de verificación de que el servidor está en
funcionamiento. Se accede a través de un navegador web.
Ruta de Subsecuencia Común Más Larga ("/lcs")
 Método: GET
 Descripción: Permite calcular la subsecuencia común más larga entre dos
cadenas de texto. Se accede a través de solicitudes GET y se deben
proporcionar los parámetros str1 y str2.

## Frontend
Descripción General
El frontend de la aplicación es una interfaz de usuario web que permite a los usuarios
interactuar con la API del backend. Permite ingresar dos cadenas de texto, enviarlas al
servidor para el cálculo y muestra el resultado en la interfaz de usuario.
Uso Básico

### Para utilizar el frontend, sigue estos pasos:
1. Asegúrate de que el servidor backend esté en ejecución (la API esté disponible
en el puerto 3000).
2. Abre el frontend en un navegador web.
3. Ingresa las dos cadenas de texto en los campos "Cadena 1" y "Cadena 2".
4. Haz clic en el botón "Calcular la subsecuencia".
5. El resultado, que incluye la longitud de la subsecuencia común más larga y la
propia subsecuencia, se mostrará en la pantalla.
Interfaz de Usuario
 Caja de Entrada de Cadenas: Dos campos de entrada de texto para ingresar
las cadenas a comparar.
 Botón de Cálculo: Al hacer clic en el botón "Calcular la subsecuencia", se
envían las cadenas al servidor para realizar el cálculo.
 Resultado: La respuesta del servidor se muestra en la parte inferior de la
pantalla, indicando la longitud de la subsecuencia común más larga y la propia
subsecuencia.

## Instalación
Para ejecutar la aplicación de Subsecuencia Común Más Larga, sigue estos pasos:
1. Abre una terminal en el directorio raíz del proyecto.
2. Ejecuta el siguiente comando para iniciar el servidor Express:
node index.js
Asegúrate de que el servidor esté escuchando en el puerto 3000.
La API ahora está en funcionamiento y lista para recibir solicitudes.
4. Instala las dependencias necesarias ejecutando el siguiente comando:
npm install
5. Una vez que las dependencias estén instaladas, puedes iniciar la aplicación
(frontend) con el siguiente comando:
npm run dev

Esto ejecutará la aplicación en un servidor local y la abrirá en tu navegador web.
Asegúrate de que el servidor del backend (API) esté en ejecución.
Concluyendo, podemos decir que esta documentación proporciona una visión
completa de la aplicación, tanto del backend como del frontend, incluyendo detalles
sobre cómo instalar y ejecutar cada parte. Asegúrate de seguir estos pasos para
garantizar un funcionamiento adecuado de la aplicación.

![diagramadeflujo-longest-common-api](https://github.com/GianCaschetto/longest-common-subsesequence/assets/83784934/42764ebe-d2ae-4b8d-bd98-0565d78c6373)
