/**
* -> index.js: El punto de entrada de la aplicación donde se configura Express y se conecta con las rutas y middleware.
* routes: Define las rutas y utiliza los controladores correspondientes para manejar las solicitudes.
* controllers: Contiene controladores que manejan la lógica de la aplicación para cada ruta.

* middleware: Almacena middleware personalizados, como la autenticación y el manejo de errores.
* models: Define modelos de datos para interactuar con la base de datos u otras fuentes de datos.
* utils: Contiene utilidades compartidas que pueden ser utilizadas en diferentes partes de la aplicación.
* config: Almacena archivos de configuración, como configuraciones de base de datos o claves secretas.
*/

require("dotenv").config();

const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");

//IMPORTAR RUTAS
const authRoutes = require("./src/routes/authRoutes");
const userQuizRoutes = require("./src/routes/userQuizRoutes");
const userProfileRoutes = require("./src/routes/userProfileRoutes");
const uploadRoutes = require("./src/routes/uploadRoutes");
const app = express();

const { configureCORS } = require("./src/middlewares/corsMiddleware");

// Middleware for parsing JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Allow all the incoming IP addresses
//app.use(cors());
app.use(configureCORS);
app.use(authRoutes);
app.use(userQuizRoutes);
app.use(userProfileRoutes);
app.use(uploadRoutes);

// Iniciar el servidor
app.listen(9000, () => {
	console.log("Servidor Express.js en ejecución");
});
