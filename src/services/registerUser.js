import { HOSTNAME } from '../consts/consts'
function registerUser({ nombre, usuario, correo, clave, genero }) {
    const data = {
        nombre,
        usuario,
        correo,
        clave,
        genero
    }
    return fetch(`${HOSTNAME}/usuarios`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(data => {
        if (!data.ok) {
            return data.json().then(error => { throw new Error(error) || 'Hubo un error'})
        }
        return data.json()
    })
    .then(information => information)
    .catch(error => {
        throw error
    })
}

export { registerUser }