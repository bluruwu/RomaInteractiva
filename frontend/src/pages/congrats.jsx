import Swal from "sweetalert2";
import Image1 from "../media/trees.png"; // Ruta de la imagen
export function Congrats({ type, message }) {
    Swal.fire({
        title: 'Custom width, padding, color, background.',
        width: 600,
        padding: '3em',
        color: '#716add',
        backdrop: `
          rgba(0,0,123,0.4)
          url("nyan-cat.gif")
          left top
          no-repeat
        `
      })
}