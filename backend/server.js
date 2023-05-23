const express = require("express");
const app = express();
const sql = require("mssql");
const bodyParser = require("body-parser");
const cors = require("cors");

// Middleware for parsing JSON bodies
app.use(bodyParser.json());

// allow all the incoming ip
app.use(cors());

// Configuración de la conexión a la base de datos
const dbConfig = {
  user: "edinsonuwu",
  password: "Ema12345",
  server: "edinsonuwu.database.windows.net",
  database: "roma",
  options: {
    encrypt: true, // Habilita la encriptación
  },
};

// Ruta para crear todas las tablas
app.get("/create/tables", async (req, res) => {
  try {
    // Conexión a la base de datos
    await sql.connect(dbConfig);

    // Operación CREATE TABLE de ejemplo
    //NO MOVER ESTO NUNCA
    const createTableQuery = `--DROP SEQUENCE IF EXISTS UserSequenceq;
    --CREATE SEQUENCE UserSequenceq
    --AS INT
    --START WITH 1
    --INCREMENT BY 1;
    DROP TABLE IF EXISTS Usuarios;
    CREATE TABLE Usuarios (
      id_user INT DEFAULT (NEXT VALUE FOR UserSequenceq) PRIMARY KEY,
      email VARCHAR(100) UNIQUE NOT NULL,
      nombre_usuario VARCHAR(100) UNIQUE NOT NULL,
      nickname VARCHAR(100) NOT NULL,
      contrasena VARCHAR(255) NOT NULL
  );
    `; //NOTA IMPORTANTE: SI USTED VA A COLCOAR PK, SEPA, QUE MUY PROBABLEMENTE NO VA A PODER (HAGA DOS POST)

    await sql.query(createTableQuery);

    res.send("Tabla creada exitosamente");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error en el servidor");
  }
});

// Ruta para registrar un usuario
app.post("/register/user", async (req, res) => {
  try {
    // Conexión a la base de datos
    await sql.connect(dbConfig);
    console.log(req.body);
    // Datos del nuevo usuario obtenidos del cuerpo de la solicitud
    const { email, nombre_usuario, nickname, contrasena } = req.body;

    // Consulta para insertar el nuevo usuario en la tabla
    const insertQuery = `INSERT INTO Usuarios (email, nombre_usuario, nickname, contrasena)
    VALUES ('${email}', '${nombre_usuario}', '${nickname}', '${contrasena}');`;

    // Ejecutar la consulta con los parámetros
    await sql.query(insertQuery);

    res.send("Usuario registrado exitosamente");
  } catch (error) {
    //console.error(error);
    res.status(500).send(error.message);
  }
});

// Ruta para consultar usuarios
app.get("/users", async (req, res) => {
  try {
    // Conexión a la base de datos
    await sql.connect(dbConfig);

    // Consulta para obtener todos los usuarios
    const query = "SELECT * FROM Usuarios;";

    // Ejecutar la consulta
    const result = await sql.query(query);

    // Obtener los resultados de la consulta
    const users = result.recordset;

    // Enviar los usuarios como respuesta
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

// Iniciar el servidor
app.listen(9000, () => {
  console.log("Servidor Express.js en ejecución");
});
