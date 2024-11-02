import { useState, useEffect } from "react";
import { getMovies } from '../services/movies'
import { useContext } from "react";
import { userContext } from '../context/userContext'
function useMovies() {
    const [movies, setMovies] = useState([])
    const { user } = useContext(userContext)
    useEffect(() => {
        if (user) {
            getMovies(user.token)
            .then(movies => setMovies(movies))
            .catch(error => console.error(error))
        }
    }, [user])
    return { movies }
}

export { useMovies }