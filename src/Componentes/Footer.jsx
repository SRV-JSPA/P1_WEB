
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <ul className="footer">
        <li><Link to='/posts/Home' >Menú principal</Link></li>
        <li>
          <Link to="/posts/crear">Crear un post</Link>
        </li>
        <li>
          <Link>Sobre Mi</Link>
        </li>
      </ul>
      <div className="derechos-footer">
        <small>Todos los derechos reservados &copy;</small>
      </div>
    </footer>
  );
}

export default Footer;


