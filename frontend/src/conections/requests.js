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
          // Perform additional actions after successful submission
        } else {
          console.error('Error:', response.status);
          // Handle error response
        }
      } catch (error) {
        console.error('Error:', error);
        // Handle network error
      }
  };
