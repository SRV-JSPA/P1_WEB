import React from "react";
import { Link, useParams } from "react-router-dom";
import { Api } from "../Api";
import axios from '../axiosConfig'

function EliminarPost() {
  const { id } = useParams();

  const Ehandler = async (e) => {
    try {
     const response = await axios.delete(`http://localhost:3000/posts/${id}`);
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