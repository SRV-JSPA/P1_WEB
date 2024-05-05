
import { Link } from 'react-router-dom'

function AuthError (){
  return (
    <section className='pagina-error' >
      <div className='centro' >
        <Link to='/posts/admin' className='btn-error'>Regresar al Login</Link>
        <h2>Necesita autenticarse primero para acceder a estas fucionalidades</h2>
      </div>
    </section>
  )
}

export default AuthError