import Swal from "sweetalert2";
export default async function start() {
  const { value: file } = await Swal.fire({
    title: 'Select image',
    input: 'file',
    inputAttributes: {
      'accept': 'image/*',
      'aria-label': 'Upload your profile picture'
    }
  });

  if (file) {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:9000/upload', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        const responseData = await response.json();
        Swal.fire({
          title: 'Upload successful  &#9989;',
          text: `The file has been uploaded to the server. Response: ${JSON.stringify(responseData)}`,
          imageUrl: URL.createObjectURL(file),
          imageAlt: 'Uploaded picture'
        });
      } else {
        Swal.fire({
          title: 'Upload failed',
          text: 'An error occurred while uploading the file.'
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Upload failed',
        text: 'An error occurred while uploading the file.'
      });
    }
  }
}
