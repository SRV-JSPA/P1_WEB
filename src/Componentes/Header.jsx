import React from "react";
import logo from "../images/logoblog.png";
import { Link } from "react-router-dom";
import {FaBars} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';

function Header() {
  const [resNav, setResNav] = React.useState(
    window.innerWidth > 800 ? true : false
  );

  const logoutHandler = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/posts/admin';
    if (location.pathname === '/posts/admin'){
      window.location.reload();
    }
  }

  const loggedIn = localStorage.getItem('token');

  return (
    <nav>
      <div className="contenedor contenedor-nav">
        <Link to='/posts/Home' className="nav-logo">
          <img src={logo} alt="Logo" />
        </Link>

        {resNav && (
          <ul className="nav-menu">
          {loggedIn ? ( 
              <>
                <li ><Link  className="nav-opt" to='/posts/crear'>Crear un post</Link></li>
                <li ><Link  className="nav-opt"  onClick={logoutHandler} >Cerrar Sesión</Link></li>
              </>
            ) : null}
          </ul>
        )}

        <button className="nav-res-menu" onClick={() => setResNav(!resNav)}>
          {resNav ? (
            <AiOutlineClose/>
          ) : (
            <FaBars/>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Header;
