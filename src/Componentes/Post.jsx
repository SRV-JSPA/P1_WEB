
import PropTypes from "prop-types";
import carro from "../images/carro.webp";
import { Link } from "react-router-dom";
import DetallePost from "../paginas/DetallePost";

function Post({ id, title, content, created_at, car_name, company }) {
  const descripcion =
    content.length > 145 ? content.substr(0, 145) + "..." : content;
  const titulo = title.length > 30 ? title.substr(0, 30) + "..." : title;
  <DetallePost
    id={id}
    title={title}
    content={content}
    created_at={created_at}
    car_name={car_name}
    company={company}
  />;
  return (
      <article className="post">
        <div className="publicacion">
          <img src={carro} alt="Imagen de carro" />
        </div>

        <div className="contenido-post">
          <Link to={`/posts/${id}`}>
            <h3>{titulo}</h3>
          </Link>
          <p dangerouslySetInnerHTML={{__html: descripcion}} />
          <p>{created_at}</p>
        </div>
      </article>
  );
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  car_name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};

export default Post;
