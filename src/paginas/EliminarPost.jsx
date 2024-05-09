
import { Link, useParams } from "react-router-dom";
import axios from '../axiosConfig'

function EliminarPost() {
  const { id } = useParams();

  const Ehandler = async () => {
    try {
      await axios.delete(`http://22318.arpanetos.lol/posts/${id}`);
      console.log("Se elimino la publicación correctamente")
    } catch (error) {
      console.error('Error de red:', error);
      localStorage.removeItem('token')
      window.location.reload();
    }
  }
  return (
    <section className="eliminar_post">
      <div className="contenedor centro">
        <h2>Estas seguro que quieres borrar esta publicación?</h2>
        <div className="botones_contenedor" >
          <Link  to={'/posts/Home'} className="btn_verde eliminar" onClick={Ehandler} >
            Sí
          </Link>
          <Link to={`/posts/${id}`}  className="btn_rojo eliminar">
            No
          </Link>
        </div>
      </div>
    </section>
  );
}

export default EliminarPost;
