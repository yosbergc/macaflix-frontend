import { Header } from "../../components/Dashboard/Header/Header"
import { Footer } from "../../components/Landing/Footer/Footer"
import { MovieSingle } from "../../components/Dashboard/MovieSingle/MovieSingle"
import { Outlet } from "react-router-dom"
import { useContext } from "react"
import { movieContext } from "../../context/movieContext"
import './dashboard.css'
function Dashboard() {
    const { movies } = useContext(movieContext)
    return (
        <>
            <Header />
            <section className="movies-container">
                <h2>Anime</h2>
                <section className="inner-movies">
                    {
                        movies.length > 0 && movies.map(pelicula => {
                            return <MovieSingle 
                            titulo={pelicula.nombre}
                            descripcion={pelicula.descripcion}
                            imageSource={pelicula.imageSource}
                            duracion={pelicula.duracion}
                            key={pelicula.id}
                            id={pelicula.id}
                            />
                        })
                    }
                </section>
            </section>
            <Footer />
            <Outlet />
        </>
    )
}

export { Dashboard }