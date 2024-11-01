import './login.css'
import { Link } from 'react-router-dom'
function Login() {
    return (
        <section className="login-page">
            <form className="login-page-form">
                <h2>Iniciar sesión</h2>
                <input type="text" name="email" id="email" placeholder='Email o número de celular'/>
                <input type="password" name="password" id="password" placeholder='Contraseña' />

                <button className="primary-btn">Iniciar sesión</button>
                <div className="bottom-form">
                    <p>¿Primera vez en Macaflix?</p>
                    <Link to='/register'>Registrate ahora</Link>
                </div>
            </form>
        </section>
    )
}

export { Login }