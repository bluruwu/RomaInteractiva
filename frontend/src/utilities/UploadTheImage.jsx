import React, { useState } from 'react';
import Swal from 'sweetalert2';

const UploadImage = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!file) {
      Swal.fire('Error', 'Please select an image.', 'error');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        Swal.fire('Success', 'Image uploaded successfully! ', 'success');
      } else {
        Swal.fire('Error', 'Failed to upload image.', 'error');
      }
    } catch (error) {
      Swal.fire('Error', 'Failed to upload image.', 'error');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
};

export default UploadImage;
