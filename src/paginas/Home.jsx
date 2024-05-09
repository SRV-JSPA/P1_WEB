import React from "react";
import Posts from "../Componentes/Posts";
import axios from '../axiosConfig'


function Home() {
  const [posts, setPosts] = React.useState([]);
  const [error, setError] = React.useState(null);

  const datos = async () => {
    try {
      const postsD = await axios.get('http://22318.arpanetos.lol/posts')
        setPosts(postsD.data);
    } catch (error) {
      localStorage.removeItem('token')
      console.error("Error al obtener los datos:", error);
      window.location.reload();
      setError(error.message);
    }
  };

  React.useEffect(() => {
    datos();
  }, []);
  return (
    <>
      {error ? (
        <div className="error">{error}</div>
      ) : (
        <Posts post={posts} />
      )}
    </>
  );
}

export default Home;
