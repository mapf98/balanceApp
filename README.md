# BalanceApp API (v1.3.0)

API para Balance, aplicación de finanzas personales.

## Resumen de la API ✔

* Modelo de datos definido y codificado.
* CRUD básico de todas las entidades en el modelo de datos.
* Logger en consola y archivo externo.
* Error Handler de express integrado.
* Se integró el módulo Helmet para seguridad y evitar ataques en las peticiones.

## Pre-requisitos 📋

_Estos son los pre-requisitos necesarios para ejecutar el proyecto y realizar pruebas sobre el mismo:_

* Git
* NODE y npm
* MySQL
* VSCode o cualquier editor de texto
* Postman o cualquier plataforma de consulta para una API REST con verbos http.

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia (local) del proyecto en funcionamiento para propósitos de análisis, desarrollo y pruebas:_

1. Clona el repositorio en tu computadora.

2. En la raíz del proyecto ejecuta el siguiente comando:

```
npm install
```

3. Luego de instalar las dependencias, ejecuta el siguiente comando para iniciar el servidor:

```
npm start
```

**Nota:** si no eres colaborador, realiza un Fork del proyecto para tener una versión del repositorio actual.

## Ejecutando las pruebas ⚙️

#### Pruebas Unitarias 🔩

_Ejecución de pruebas unitarias por definir_

#### Pruebas de estilo de codificación ⌨️

_Por definir_

## Despliegue 📦

_Por definir_

## Construido con 🛠️

* Express.js
* NPM
* Body Parser
* Path
* Server Static
* Compression
* Dotenv
* Errorhandler
* Morgan
* Chalk
* Helmet

## Wiki 📖

_Por definir_

## Versionado 📌

Se usará [SemVer](http://semver.org/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/mapf98/balanceApp/tags).

## Mejoras por incluir 📋

#### API

* En versiones anteriores agregar el .gitignore y eliminar el node_modules junto con el .lock.
* En versiones anteriores agregar eliminar el .gitignore y eliminar el node_modules junto con el .lock.
* Eliminar el .env por seguridad.
* Agregar pruebas unitarias.
* Agregar linter.

## Sistemas por desarrollar

* Sistema de información monetaria en tiempo real.
* Sistema de autorización mediante Token.
* Sistema de cookies y sesión.

#### Configuraciones de proyecto

* Reglas de estilo de código.
* Reglas de markdownlint.
* ENV para producción.
* Agregar etiqueta de versiones a la API.
* Agregar linter de código.

#### Mejoras en BD

* Validación de los atributos de las entidades.

#### WIKI

* Crear wiki.
* Incluir peticiones de prueba.

## Temas de interés por investigar 🎓

* Investigar uso de rutas dinámicas.
* Investigar cookie-session y session stores.
* Investigar http-errors.
* Investigar configuración de CORS.
* Investigar uso de COOKIES.
* Investigar login con cuentas de google.
* Investigar seguridad en BD.
* Envio de correos electrónicos.
* Token de ingreso.
* Manejo de excepciones (investigar en donde es el lugar adecuado).
* Investigar sobre Process Manager para Express (para producción).
* Revisar temas de seguridad en [Express](https://expressjs.com/en/advanced/best-practice-security.html)
* Revisar temas de optimización en [Express](https://expressjs.com/en/advanced/best-practice-performance.html)

## Sugerencias 🚀

* Se puede crear un sistema rotatorio de archivos con morgan para llevar un logger diario de las peticiones realizadas a la API.
* Agregar logger en archivo para errores.

## Autores ✒️

+ **Miguel Antonio Peña Fraga**
+ **Alba Sofía Sánches Silvestre**
