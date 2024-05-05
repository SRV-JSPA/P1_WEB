
import { Link } from 'react-router-dom'

function Error (){
  return (
    <section className='pagina-error' >
      <div className='centro' >
        <Link to='/posts/Home' className='btn-error'>Regresar a la página principal</Link>
        <h2>Página no encontrada</h2>
      </div>
    </section>
  )
}

export default Error