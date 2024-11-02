import { HOSTNAME } from '../consts/consts'
function getSingleMovie(movieId, token) {
    return fetch(`${HOSTNAME}/peliculas/${movieId}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${token}`
        }
    })
      .then(response => {
        if (!response.ok) {
            return response.json().then(error => { throw Error(error) || 'Bad request' })
        }
        return response.json()
      })
      .then(data => data)
      .catch(error => {
        throw error;
      }) 
}

export { getSingleMovie }