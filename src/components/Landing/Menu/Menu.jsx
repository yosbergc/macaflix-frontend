import { useState } from "react"
import { IoMenu } from "react-icons/io5"
import './menu.css'
function Menu() {
    const [mobileMenu, setMobileMenu] = useState(false)
    function handleMobileMenu() {
        setMobileMenu(!mobileMenu)
    }
    return (
        <section>
            <IoMenu color="white" size={25} className="mobile-menu-button" onClick={handleMobileMenu}/>
            {
                mobileMenu && <section className="mobile">
                    
                </section>
            }
            <section className="desktop-menu">
                <nav>
                    <button className="primary-btn">Iniciar sesión</button>
                </nav>
            </section>
        </section>
    )
}
export { Menu }