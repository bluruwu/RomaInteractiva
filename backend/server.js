const express = require("express");
const app = express();
const port = 3000; // Puerto en el que escuchará el servidor

// Define las rutas y el manejo de las mismas
app.get("/", (req, res) => {
  res.send("¡Hola mundo!");
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
