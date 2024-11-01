import { useState } from "react"
import { IoMenu } from "react-icons/io5"
import { Link } from 'react-router-dom';
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
                    <Link className="primary-btn" to='/login'>Iniciar sesión</Link>
                </nav>
            </section>
        </section>
    )
}
export { Menu }