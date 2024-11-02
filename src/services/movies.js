import { HOSTNAME } from '../consts/consts'
function getMovies(token) {
    return fetch(`${HOSTNAME}/peliculas`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${token}`
        }
    })
    .then(data => {
        if (!data.ok) {
            return data.json().then(error => { throw Error(error) || 'Hubo un error'})
        }
        return data.json()
    })
    .then(informacion => informacion)
    .catch(error => {
        throw error
    })
}

export { getMovies }