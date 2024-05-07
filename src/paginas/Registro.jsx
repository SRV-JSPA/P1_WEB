import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Registro (){
  
  const [usuario, setUsuario] = React.useState('')
  const [contraseña, setContraseña] = React.useState('')

  const [error, setError] = React.useState('');

 

  const submithandler = async (e) => {
    e.preventDefault();
    if(!usuario || !contraseña ) {
      setError("Todos los campos son obligatorios")
      return;
    }

    const data = {
      user: usuario,
      password: contraseña
    }


    try {
      const res = await axios.post('http://localhost:22318/users', data)
      if(res.status === 200){
        window.location.href = '/posts/admin'
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  }
  

  return (
    <section className='registro' >
      <div className='contenedor' >
        <h2>Registrarse</h2>
        <form className='form form-registro'>
        {error && <p className='mensaje-error_form'>{error}</p>}
          <input type='text' placeholder='Su usuario' name='user' value={usuario.user} onChange={(e) => setUsuario(e.target.value)} autoFocus/>
          <input type='password' placeholder='Su contraseña' name='contra' value={usuario.contra} onChange={(e) => setContraseña(e.target.value)} />
          <button type='submit'  className='btn verde'  onClick={submithandler} >Registrar</button>
        </form>
      <small>Ya tiene una cuenta? <Link to='/posts/admin' >sign in</Link></small>
      </div>
    </section>
  )
}

export default Registro