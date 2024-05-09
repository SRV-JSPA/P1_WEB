import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from '../axiosConfig'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function EditarPost() {
  const { id } = useParams();

  const modulos = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { ident: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formatos = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const [carro, setCarro] = useState("");
  const [marca, setMarca] = useState("");
  const [imagen, setImagen] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!titulo || !contenido || !carro || !marca || !imagen) {
      setError("Por favor completa todos los campos.");
      return;
    }

    const data = {
      title: titulo,
      content: contenido,
      car: carro,
      brand: marca,
      imagen: imagen
    };
    try {
      const res = await axios.put(`http://22318.arpanetos.lol/posts/${id}`, data);
        console.log(res);
    } catch (error) {
      console.log(error);
      localStorage.removeItem('token')
      window.location.reload();
    }
  };

  const res = async () => {
    try {
      const response = await axios.get(`http://22318.arpanetos.lol/posts/${id}`, {
        headers: {
          
          mensaje: 'desde editar2'
        }
      });
        const info = response.data;

        if (info.length > 0) {
          const post = info[0];
          setTitulo(post.title);
          setContenido(post.content);
          setCarro(post.car_name);
          setMarca(post.company);
          setImagen(post.imagen);
      }
    } catch (error) {
      console.log(error);
      localStorage.removeItem('token')
      window.location.reload();
    }
  };

  useEffect(() => {
    res();
  }, []);

  return (
    <section className="crear-post">
      <div className="contenedor">
        <h2>Editar Post</h2>
        {error && <p className="mensaje-error_form">{error}</p>}
        <form>
          <input
            type="text"
            placeholder="Titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Carro"
            value={carro}
            onChange={(e) => setCarro(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Marca"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="URL imagen"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          ></input>
          <p className="opcion">-------------------O-------------------</p>
          <ReactQuill
            modules={modulos}
            formats={formatos}
            value={contenido}
            onChange={setContenido}
          />
          <input
            type="file"
            onChange={(e) => setImagen(e.target.files[0])}
            accept="png, jpg, jpeg"
          ></input>
          <Link to='/posts/Home'  type="submit" className="btn-publicar" onClick={handleSubmit} >
            Actualizar
          </Link>
        </form>
      </div>
    </section>
  );
}

export default EditarPost;
