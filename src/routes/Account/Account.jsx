import './account.css'
import ProfilePic from '../../assets/profile-pic.png'
import { Footer } from '../../components/Landing/Footer/Footer'
function Account() {
    return (
        <section className='account-page'>
            <section className="main-account">
                <img src={ProfilePic} alt="Profile Pic" />
                <h2>Yosber</h2>
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" id="name" />
                <label htmlFor="email">Correo</label>
                <input type="text" name="email" id="email" />
            </section>
            <Footer />
        </section>
    )
}
export { Account }