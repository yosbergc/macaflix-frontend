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
                <h2>Dark</h2>
                <p>La desaparición de dos niños muestra los vínculos entre cuatro familias y expone el pasado de una pequeña ciudad.</p>
                <div>
                    <button className="secondary-btn"><FaPlay />Reproducir</button>
                    <button className="terceary-btn"><GrCircleInformation  size={23}/>Más Información</button>
                </div>
            </section>
        </section>
    )
}
export { Header }