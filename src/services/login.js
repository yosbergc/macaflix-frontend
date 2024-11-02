import { HOSTNAME } from "../consts/consts"
function login({ correo, clave }) {
    const data = {
        correo,
        clave
    };
    return fetch(`${HOSTNAME}/auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(error => { throw new Error(error) || 'Hubo un error' })
        }
        return response.json();
    })
    .then(informacion => informacion)
    .catch(error => {
        throw error;
    });
}

export { login }