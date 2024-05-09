import React from 'react'
import { Link } from 'react-router-dom'
import axios from '../axiosConfig'

function Login (){
  const [usuario, setUsuario] = React.useState('')
  const [contraseña, setContraseña] = React.useState('')

  const [error, setError] = React.useState('');

  

  const submithandler = async () => {
    if(!usuario || !contraseña ) {
      setError("Todos los campos son obligatorios")
      return;
    }
    

    const data = {
      user: usuario,
      password: contraseña
    }

    try {
      const res = await axios.get('http://22318.arpanetos.lol/users', {
        headers: {
          user: data.user,
          password: data.password
        }
      })
      const {token} = res.data
      localStorage.setItem('token', token);
      localStorage.setItem('isLoggedIn', true)
      window.location.href = '/posts/Home';
      if (location.pathname === '/posts/Home'){
        window.location.reload();
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error); 
    }
  }
  

  return (
    <section className='registro' >
      <div className='contenedor' >
        <h2>Inicio de sesión</h2>
        <form className='form form-registro'>
          {error && <p className='mensaje-error_form' >{error}</p>}
          <input type='text' placeholder='Su usuario' name='user' value={usuario.user} onChange={(e) => setUsuario(e.target.value)} autoFocus/>
          <input type='password' placeholder='Su contraseña' name='contra' value={usuario.contra} onChange={(e) => setContraseña(e.target.value)} />
          <Link  className='btn verde' onClick={submithandler} >Iniciar sesión</Link>
        </form>
      <small>Aún no tiene una cuenta? <Link  to='/posts/registro' >crear cuenta</Link></small>
      </div>
    </section>
  )
}

export default Login