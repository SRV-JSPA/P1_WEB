import React from "react";
import { Link, useParams } from "react-router-dom";
import carro from '../images/carro.webp'
import axios from '../axiosConfig'

function DetallePost() {
  const { id } = useParams();

  const [loading, setLoading] = React.useState(true);
  const [posts, setPosts] = React.useState([]);
  const [error, setError] = React.useState(null);

  const datos = async () => {
    try {
      const postsD = await axios.get(`http://localhost:3000/posts/${id}`)
        setPosts(postsD.data);
        setLoading(false);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
      setError(error.message);
      setLoading(false);
      localStorage.removeItem('token')
      window.location.reload();
    }
  };

  React.useEffect(() => {
    datos();
  }, []);


  return (
    <>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        posts.map(({id, title, content, created_at}) => (
          <section  key={id} className="detalle-post" >
            <div className="contenedor contenedor-detalle-post">
              <div className="detalle-post_header" >
              <h1>{title}</h1>
                <div className="detalle-post_botones" >
                  <Link to={`/posts/${id}/editar`}  className="btn sm negro" >Editar</Link>
                  <Link to={`/posts/${id}/borrar`}  className="btn sm rojo" >Borrar</Link>
                </div>
              </div>
              <p>{created_at}</p> 
              <div className="detalle-post_imagen" >
                <img src={carro} alt="Imagen post" />
              </div> 
              <p dangerouslySetInnerHTML={{__html:content}} />
            </div>
          </section>
        ))
      )}
    </>
  );
  
}

export default DetallePost;
