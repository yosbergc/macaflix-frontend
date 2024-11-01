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
        return data.json()
    })
    .then(information => information)
    .catch(error => console.log(error))
}

export { registerUser }