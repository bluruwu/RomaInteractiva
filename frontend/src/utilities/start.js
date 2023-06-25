import Swal from "sweetalert2";
import { postImage, putActualizarPerfil } from "../conections/requests";

export default async function uploadImageToServer(token) {
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
      const response = await postImage(formData,token);

      if (response.ok) {
        const responseData = await response.json();
        const responseUpdateProfile = await putActualizarPerfil({avatar_id: responseData.message},token);
        Swal.fire({
          title: 'Upload successful  &#9989;',
          text: `The file has been uploaded to the server. Response: ${JSON.stringify(responseData)}`,
          imageUrl: URL.createObjectURL(file),
          imageAlt: 'Uploaded picture'
        });
        return JSON.stringify(responseData)
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
