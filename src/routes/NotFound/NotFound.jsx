import './notfound.css'
import { Link } from 'react-router-dom'
import NotFoundImage from '../../assets/notfound.webp'
function NotFound() {
    return (
        <section className='notfound-page'>
            <img src={NotFoundImage} alt="" />
            <h2>Pagina no encontrada</h2>
            <Link to='/' className='primary-btn'>Volver a la página de inicio</Link>
        </section>
    )
}

export { NotFound }