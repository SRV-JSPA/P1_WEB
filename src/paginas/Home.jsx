import React from "react";
import Posts from "../Componentes/Posts";
import axios from '../axiosConfig'


function Home() {
  const [loading, setLoading] = React.useState(true);
  const [posts, setPosts] = React.useState([]);
  const [error, setError] = React.useState(null);
  const token = localStorage.getItem('token');

  const datos = async () => {
    try {
      const postsD = await axios.get('http://localhost:3000/posts')
        setPosts(postsD.data);
        setLoading(false);
    } catch (error) {
      localStorage.removeItem('token')
      console.error("Error al obtener los datos:", error);
      window.location.reload();
      setError(error.message);
      setLoading(false);
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
