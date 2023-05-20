const express = require('express');
const app = express();
const sql = require('mssql');

// Configuración de la conexión a la base de datos
const dbConfig = {
  user: 'edinsonuwu',
  password: 'Ema12345',
  server: 'edinsonuwu.database.windows.net',
  database: 'roma',
  options: {
    encrypt: true // Habilita la encriptación
  }
};

// Ruta para crear todas las tablas
app.get('/', async (req, res) => {
  try {
    // Conexión a la base de datos
    await sql.connect(dbConfig);

    // Operación CREATE TABLE de ejemplo
    const createTableQuery = `
    DROP TABLE IF EXISTS Usuarios;
    CREATE TABLE Usuarios(
        email VARCHAR(100) NOT NULL,
        nombre_usuario VARCHAR(100) NOT NULL,
        nombre VARCHAR(100) NOT NULL,
        contrasena VARCHAR(255) NOT NULL,
        PRIMARY KEY (email)
      );
    `;

    await sql.query(createTableQuery);

    res.send('Tabla creada exitosamente');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
});

// Ruta para registrar un usuario
app.post('/usuarios', async (req, res) => {
  try {
    // Conexión a la base de datos
    await sql.connect(dbConfig);

    // Datos del nuevo usuario obtenidos del cuerpo de la solicitud
    const { email, nombre_usuario, nombre, contrasena } = req.body;

    // Consulta para insertar el nuevo usuario en la tabla
    const insertQuery = `
      INSERT INTO Usuarios (email, nombre_usuario, nombre, contrasena)
      VALUES (@email, @nombre_usuario, @nombre, @contrasena);
    `;

    // Parámetros de la consulta
    const parameters = [
      { name: 'email', value: email },
      { name: 'nombre_usuario', value: nombre_usuario },
      { name: 'nombre', value: nombre },
      { name: 'contrasena', value: contrasena }
    ];

    // Ejecutar la consulta con los parámetros
    await sql.query(insertQuery, parameters);

    res.send('Usuario registrado exitosamente');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
});

// Iniciar el servidor
app.listen(9000, () => {
  console.log('Servidor Express.js en ejecución');
});