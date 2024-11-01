import MacaflixLogo from '../../../assets/macaflix.png'
import { Menu } from '../Menu/Menu'
import { FaArrowRight } from "react-icons/fa";
import './header.css'
function Header() {
    return (
        <section className='hero-section'>
            <header>
                <img src={MacaflixLogo} alt="Macaflix Logo" />
                <Menu />
            </header>
            <section className="hero-inner">
                <h1>Películas y series de la mejor calidad por Macaquiño</h1>
                <strong>A partir de USD 3,99. Cancela cuando quieras.</strong>
                <p>¿Quieres ver Macaflix ya? Ingresa a tu cuenta o regístrate para poder disfrutar de tu membresía.</p>
                <div>
                    <button className="primary-btn">Iniciar sesión
                    <FaArrowRight />
                    </button>
                    <button className="secondary-btn">Registrarse</button>
                </div>
            </section>
        </section>
    )
}
export { Header }