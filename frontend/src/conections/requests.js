export const postData = async (mydata) => {
  try {
    const response = await fetch('http://localhost:9000/register/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(mydata)
    });

    if (response.ok) {
      console.log('Data submitted successfully');
      return 'Data submitted successfully'
      // Perform additional actions after successful submission
    } else {
      const error = await response.json()
      console.error(error);
      return 'Email or Username already taken'
      // Handle error response
    }
  } catch (error) {
    console.error('Error:', error);
    return 'Conection failed'
    // Handle network error
  }
};

export const getLogin = async (mydata) => {
  try {
    const response = await fetch("http://localhost:9000/users");
    const jsonData = await response.json();

    if (response.ok) {
      console.log("adsdvsdav")
      console.log(jsonData)
      var validCredentialsCounter = 0
      for (let i in jsonData) {
        console.log(jsonData[i])
        if (jsonData[i]['nombre_usuario'] === mydata['nombre_usuario']){
          validCredentialsCounter++
        }
        if (jsonData[i]['contrasena'] === mydata['contrasena']){
          validCredentialsCounter++
        }
        if (validCredentialsCounter == 2){
          return 'Correct credentials'
        }else{
          validCredentialsCounter = 0
        }
      }
      return "Username or Password are invalid"
    } else {
      return 'Credentials are not right'
    }
  } catch (error) {
    console.error('Error:', error);
    return 'Conection failed'
  }
};
