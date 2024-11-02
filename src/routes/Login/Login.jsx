import './login.css'
import { Link } from 'react-router-dom'
import { login } from '../../services/login'
import { Toaster, toast } from 'sonner'
import { useContext } from 'react'
import { userContext } from '../../context/userContext'
import { useNavigate } from 'react-router-dom'
function Login() {
    const navigate = useNavigate()
    const { loginUser } = useContext(userContext)
    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const correo = formData.get('email')
        const clave = formData.get('password')

        if (!correo || !clave) {
            return toast.error('Necesitamos que rellenes los campos para poder ingresar.');
        }

        login({ correo, clave })
          .then(data => {
            loginUser(data.nombre, data.token)
            navigate('/dashboard')
          })
          .catch(error => toast.error(error.message))
    }
    return (
        <section className="login-page">
            <form className="login-page-form" onSubmit={handleSubmit}>
                <h2>Iniciar sesión</h2>
                <input type="text" name="email" id="email" placeholder='Email o usuario'/>
                <input type="password" name="password" id="password" placeholder='Contraseña' />

                <button className="primary-btn">Iniciar sesión</button>
                <div className="bottom-form">
                    <p>¿Primera vez en Macaflix?</p>
                    <Link to='/register'>Registrate ahora</Link>
                </div>
            </form>
            <Toaster richColors/>
        </section>
    )
}

export { Login }