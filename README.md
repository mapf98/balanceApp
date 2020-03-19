# BalanceApp API (v1.1.0)

API para Balance, aplicación de finanzas personales.

## Resumen de la API

* Modelo de datos definido y codificado.
* CRUD básico de todas las entidades en el modelo de datos.
* Logger en consola y archivo externo.

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

#### Pruebas end-to-end 🔩

_Ejecución de pruebas end2end por definir_

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

## Wiki 📖

_Por definir_

## Versionado 📌

Se usará [SemVer](http://semver.org/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/mapf98/balanceApp/tags).

## Mejoras por incluir 📋

#### API

* Configurar error handler (para desarrollo solamente).
* Agregar manejo de excepciones (investigar en donde es el lugar adecuado).
* En versiones anteriores agregar el .gitignore y eliminar el node_modules junto con el .lock.
* Agregar excepcionfilter o similar.
* Agregar logger en archivo para errores.

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
* Investigar cookieparser.
* Investigar http-errors.
* Investigar configuración de CORS.
* Investigar uso de COOKIES.
* Investigar login con cuentas de google.
* Investigar seguridad en backend.
* Investigar seguridad en BD.

## Sugrencias

* Se puede crear un sistema rotatorio de archivos con morgan para llevar un logger diario de las peticiones realizadas a la API.

## Autores ✒️

+ **Miguel Antonio Peña Fraga**
+ **Alba Sofía Sánches Silvestre**
