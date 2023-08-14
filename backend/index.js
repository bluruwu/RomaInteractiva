require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
// const cors = require("cors");

//IMPORTAR RUTAS
const authRoutes = require("./src/routes/authRoutes");
const userQuizRoutes = require("./src/routes/userQuizRoutes");
const app = express();

const { google } = require("googleapis");
const fs = require("fs");
const { configureCORS } = require("./src/middlewares/corsMiddleware");

// Middleware for parsing JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Allow all the incoming IP addresses
//app.use(cors());
app.use(configureCORS);
app.use(authRoutes);
app.use(userQuizRoutes);

// Iniciar el servidor
app.listen(9000, () => {
	console.log("Servidor Express.js en ejecución");
});
