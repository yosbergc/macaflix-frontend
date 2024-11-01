import MacaflixLogo from '../../../assets/macaflix.png'
import { UserDropdown } from '../UserDropdown/UserDropdown'
import { FaPlay } from "react-icons/fa";
import { GrCircleInformation } from "react-icons/gr";
import './header.css'
function Header() {
    return (
        <section className="hero-section-dasdhboard">
            <header>
                <img src={MacaflixLogo} alt="Macaflix Logo" />
                <UserDropdown />
            </header>
            <section className="hero-section-inner">
                <h2>Jujutsu Kaisen</h2>
                <p>Un estudiante de secundaria común y corriente con una fuerza sobrenatural impresionante. Después de un encuentro con maledictos, seres malvados que se alimentan de energía negativa, Yuji se ve involucrado en el mundo de la maldición.</p>
                <div>
                    <button className="secondary-btn"><FaPlay />Reproducir</button>
                    <button className="terceary-btn"><GrCircleInformation  size={23}/>Más Información</button>
                </div>
            </section>
        </section>
    )
}
export { Header }