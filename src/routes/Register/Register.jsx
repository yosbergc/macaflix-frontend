import { Link } from "react-router-dom"
import { registerUser } from '../../services/registerUser'
import './register.css'
import { Toaster, toast } from "sonner"
function Register() {
    function handleForm(event) {
        event.preventDefault()

        const formData = new FormData(event.target)
        const nombre = formData.get('nombre')
        const usuario = formData.get('usuario')
        const correo = formData.get('email')
        const clave = formData.get('password')
        const genero = formData.get('genero')

        if (nombre.length === 0 || usuario.length === 0 || email.length === 0 || clave.length === 0 || genero === 'genero') {
            return toast.error('Necesitamos que completes todos los campos.')
        }
        registerUser({
            nombre,
            usuario,
            correo,
            clave,
            genero
        }).then(response => toast(response))
    }
    return (
        <section className="register-page">
            <form className="register-page-form" onSubmit={handleForm}>
                <h2>Registrarse</h2>
                <input type="text" name="nombre" id="nombre" placeholder="Nombre"/>
                <input type="text" name="usuario" id="usuario" placeholder="Nombre de usuario"/>
                <input type="email" name="email" id="email" placeholder='Email o número de celular'/>
                <input type="password" name="password" id="password" placeholder='Contraseña' />
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
            <Toaster richColors/>
        </section>
    )
}

export { Register }