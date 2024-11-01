import { Link } from "react-router-dom"
import './register.css'
function Register() {
    return (
        <section className="register-page">
            <form className="register-page-form">
                <h2>Registrarse</h2>
                <input type="text" name="nombre" id="nombre" placeholder="Nombre"/>
                <input type="text" name="usuario" id="usuario" placeholder="Nombre de usuario"/>
                <input type="text" name="email" id="email" placeholder='Email o número de celular'/>
                <input type="password" name="email" id="password" placeholder='Contraseña' />
                <select name="genero" id="genero">
                    <option value="genero">Genero</option>
                    <option value="hombre">Hombre</option>
                    <option value="mujer">Mujer</option>
                    <option value="macaco">Macaco</option>
                    <option value="prefernotsay">Prefiero no decir</option>
                </select>
                <button className="primary-btn">Registrarme</button>
                <div className="bottom-form">
                    <p>¿Ya estás registrado?</p>
                    <Link to='/login'>Iniciar sesión</Link>
                </div>
            </form>
        </section>
    )
}

export { Register }