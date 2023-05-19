import React from 'react';

const Login = () => {
  return (
    <div style={styles.container}>
      <div style={styles.leftPanel}>
        <img
          src={require('./plaza_san_pedro.jpg')}// Reemplaza "ruta-de-la-imagen.jpg" con la ruta de tu imagen
          alt="Imagen de fondo"
          style={styles.imageLeft}
        />
      </div>
      <div style={styles.rightPanel}>
        <img
          src={require('./plaza_san_pedro.jpg')}// Reemplaza "ruta-de-la-imagen.jpg" con la ruta de tu imagen
          alt="Imagen en el top right"
          style={styles.imageTopRight}
        />
        <br>
        </br>
        <div style={styles.inputGroup}>
          
          <input type="text" style={styles.input} placeholder="Username" />
        </div>
        <div style={styles.inputGroup}>
          
          <input type="password" style={styles.input} placeholder="Password" />
        </div>
        <button style={styles.loginButton}>Login</button>
      </div>
    </div>
  );
};

export default Login;

// Estilos CSS en línea
const styles = {
  container: {
    display: 'flex',
    height: '100vh',
  },
  leftPanel: {
    flex: '1.618',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightPanel: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    padding: '40px',
  },
  imageLeft: {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    padding: 0,
  },
  imageTopRight: {
    width: '20%',
    height: '5%',
    objectFit: 'cover',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  label: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  loginButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: 'lightblue',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};