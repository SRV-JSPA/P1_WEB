import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Registro (){
  
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
      const res = await axios.post('http://localhost:3000/users', data)
      console.log(res);
    } catch (error) {
      console.log(error);
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
          <Link to='/posts/admin' type='submit'  className='btn verde'  onClick={submithandler} >Registrar</Link>
        </form>
      <small>Ya tiene una cuenta? <Link to='/posts/admin' >sign in</Link></small>
      </div>
    </section>
  )
}

export default Registro