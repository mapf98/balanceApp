# BalanceApp API (v2.0.0)

API para Balance, aplicación de finanzas personales.

## Resumen de la API ✔

* Modelo de datos definido y codificado.
* CRUD básico de todas las entidades en el modelo de datos adecuado a una BD con pg-promise.
* Logger en consola y archivo externo.
* Error Handler de express integrado.
* Se integró el módulo Helmet para seguridad y evitar ataques en las peticiones.
* Se integró ESLint como linter de código.
* Se integró Prettier como formateador de código.
* Se agregó la suite de pruebas de la API.
* Se integró el modulo de Autorización en la API (JWT Tokens).
* Se integró el sistema de actualización dinámico de moneda.

## Pre-requisitos 📋

_Estos son los pre-requisitos necesarios para ejecutar el proyecto y realizar pruebas sobre el mismo:_

* Git
* NODE y npm
* Postgres
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

_Estas instrucciones te permitirán ejecutar las pruebas unitarias de la API, en estas se podrá verificar que cualquier parte del código ha sido probada de manera atómica y particular._

* Ejecuta el siguiente código para ejecutar las pruebas unitarias y obtener la cobertura de código actual:

```
npm run test
```

* Ejecuta el siguiente código para ejecutar una prueba para un archivo particular:

```
npx jest <nombre del archivo.test.js> --detectOpenHandles
```

#### Pruebas de lógica de aplicación ⌨️

_Estas instrucciones te permitirán ejecutar las pruebas necesarias para determinar errores en la lógica del proyecto, es decir, loops infinitos, variables no utilizadas, condicionales duplicados, etc._

* Ejecuta el siguiente código para evaluar un archivo específico:

```
npx eslint <ubicación del archivo/nombre del archivo.js>
```

* Para arreglar los errores en el archivo puedes hacerlo de dos formas: con tu editor de código o con la línea de comandos:

```
npx eslint --fix <ubicación del archivo/nombre del archivo.js>
```

**Nota:** para otros comando en consola puedes visitar [Command Line Interface - ESLint](https://eslint.org/docs/user-guide/command-line-interface)

#### Pruebas de estilo de codificación ⌨️

_Estas instrucciones te permitirán ejecutar las pruebas necesarias para determinar si el código escrito cumple con las normas de estilo establecidas._

* Ejecuta el siguiente código para evaluar un archivo específico:

```
npx prettier --check "<ubicación del archivo/nombre del archivo.js>"
```
**Nota:** para otros comando en consola puedes visitar [Usage - Prettier](https://prettier.io/docs/en/cli.html)

## Despliegue 📦

Visita la API desplegada en Heroku para una petición GET de lugares [API Balance - Places](https://api-balance.herokuapp.com/balance/api/places)

_¿Cómo se desplegó la aplicación en Heroku?_

#### Despliegue de la API en Heroku

* Primero se crea una cuenta en Heroku y se crea una app.
* Luego se tiene que configurar Heroku como remoto, tal cual como si fuera un repositorio.
* Paso siguiente se tienen que verificar todos los elementos antes de desplegar.
* Al tener el proyecto verificado se hace un push a heroku de la rama donde tengas el proyecto actualmente.
* Después se genera la aplicación y se puede verificar a través del link que te proporciona al final de la tarea.

_Elementos importantes a considerar:_

* Las variables de entorno deben definirse a través de la plataforma de Heroku, por lo tanto se debe ir a settings del proyecto y configurar las mismas para su uso, esto debido a que el .env no se sube durante el push.
* Se puede usar el siguiente comando para verificar los logs actuales de la versión desplegada:

```
heroku logs --tail
```

#### Despliegue de la BD en Heroku

* Primero se añade el addon de Heroku Postgres al proyecto actual.
* Luego tomamos la info que se proporciona a través de la app para crear una conexión desde el pgAdmin y así poder adminstrar nuestra BD en nuestro ordenador.
* Al realizar esto ya podremos disponer de la misma para su uso a través de la variable de entorno DATABASE_URL la cual se configura automaticamente al añadir la extensión.

**Nota**: para lograr que la API y la BD se integraran de manera adecuada se realizó una configuración super importante para el manejor de certificados SSL a través de HTTPS. A continuación se deja la configuración del pg-promise para futuros casos.
```
pgp({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
        mode: require
    }
})
```

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
* jwt-simple
* Moment
* Axios
* node-cron
* cros
* pg-promise

## Wiki 📖

_Por definir_

## Versionado 📌

Se usará [SemVer](http://semver.org/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/mapf98/balanceApp/tags).

## Mejoras por incluir 📋

#### API

* En versiones anteriores agregar el .gitignore, eliminar el node_modules junto con el .lock y el .env.

#### Sistemas por desarrollar

_Por los momentos no hay sistemas por desarrollar_

#### Configuraciones de proyecto

* Agregar etiqueta de versiones a la API en el README.
* Agregar el Scheduler a Heroku para el sistema de moneda automático.

#### Mejoras en BD

* Validación de los atributos de las entidades.

#### WIKI

* Crear wiki.
* Incluir peticiones de prueba.

## Temas de interés por investigar 🎓

* Investigar sobre le uso de webpack y sus veneficios para una API.
* Investigar login con cuentas de google o externos.
* Investigar sobre Process Manager para Express (para producción).
* Revisar temas de seguridad en [Express](https://expressjs.com/en/advanced/best-practice-security.html)
* Revisar temas de optimización en [Express](https://expressjs.com/en/advanced/best-practice-performance.html)

## Sugerencias 🚀

* Se puede crear un sistema rotatorio de archivos con morgan para llevar un logger diario de las peticiones realizadas a la API.
* Aislar el sistema de actualización de moneda como un servicio dentro de la API.
* Se puede usar http-errors como un estándar de errores.
* Se puede incluir el envio de emails con nodemailer para futuras funcionalidades.
* Se puede incluir seguridad y mayores niveles de validación en BD.

## Autores ✒️

+ **Miguel Antonio Peña Fraga**
+ **Alba Sofía Sánches Silvestre**
