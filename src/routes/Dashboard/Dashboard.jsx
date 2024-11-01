import { Header } from "../../components/Dashboard/Header/Header"
import { Footer } from "../../components/Landing/Footer/Footer"
import { MovieSingle } from "../../components/Dashboard/MovieSingle/MovieSingle"
import { Outlet } from "react-router-dom"
import './dashboard.css'
function Dashboard() {
    return (
        <>
            <Header />
            <section className="movies-container">
                <h2>Anime</h2>
                <section className="inner-movies">
                    <MovieSingle />
                    <MovieSingle />
                    <MovieSingle />
                    <MovieSingle />
                    <MovieSingle />
                </section>
            </section>
            <Footer />
            <Outlet />
        </>
    )
}

export { Dashboard }