import { createContext } from "react";
import { useMovies } from '../hooks/useMovies'
const movieContext = createContext()

function ProvideMovie({ children }) {
    const { movies } = useMovies()
    return <movieContext.Provider value={{
        movies
    }}>
        {children}
    </movieContext.Provider>
}

export { movieContext, ProvideMovie }