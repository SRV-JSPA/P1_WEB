import React from "react";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from '../axiosConfig'

function CrearPost() {
  const [titulo, setTitulo] = React.useState("");
  const [contenido, setContenido] = React.useState("");
  const [carro, setCarro] = React.useState("");
  const [marca, setMarca] = React.useState("");
  const [imagen, setImagen] = React.useState("");
  const [error, setError] = React.useState("");

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

  const handleSubmit = async () => {
    
    if (!titulo || !contenido || !carro || !marca || !imagen) {
      setError("Por favor completa todos los campos.");
      return;
    }
   

    const data = {
      titulo: titulo,
      contenido: contenido,
      carro: carro,
      marca: marca,
      imagen: imagen
    };
    try {
       await axios.post("http://22318.arpanetos.lol/posts", data);
    } catch (error) {
      console.log(error);
      localStorage.removeItem('token')
      window.location.reload();
    }
  }
  

  return (
    <section className="crear-post">
      <div className="contenedor">
        <h2>Crear un Post</h2>
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
          <ReactQuill  modules={modulos} formats={formatos} value={contenido} onChange={setContenido}s/>
          <input
            type="file"
            onChange={(e) => setImagen(e.target.files[0])}
            accept="png, jpg, jpeg"
          ></input>
          <Link to={'/posts/Home'} className="btn-publicar" onClick={handleSubmit} >
            Publicar
          </Link>
        </form>
      </div>
    </section>
  );

  
}

export default CrearPost;
