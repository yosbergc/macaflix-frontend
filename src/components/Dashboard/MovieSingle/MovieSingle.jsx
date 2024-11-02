import './moviesingle.css'
import { useState } from 'react'
import { FaPlay } from "react-icons/fa";
import { GrLike } from "react-icons/gr";
import { GrDislike } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
function MovieSingle({ titulo, descripcion, duracion }) {
    const [showMovieInfo, setShowMovieInfo] = useState(false)
    const navigate = useNavigate()
    function handleClick() {
        navigate(`/dashboard/m/id`)
        setShowMovieInfo(false)
    }
    return (
        <section className="movie-single-container">
            <section className="movie-show" onMouseEnter={() => {
                setShowMovieInfo(true)
            }}>
                <img src="https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/11/08/imagen-promocional-de-jujutsu-kaisen.jpeg" alt="Jujutsu Kaisen" onClick={handleClick}/>
            </section>
            {
                showMovieInfo && <section className="movie-inner" onMouseLeave={() => setShowMovieInfo(false)}>
                    <img src="https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/11/08/imagen-promocional-de-jujutsu-kaisen.jpeg" alt="Jujutsu Kaisen" onClick={handleClick}/>
                    <section className="movie-inner-content">
                        <h3>Jujutsu Kaisen</h3>
                        <p>Un estudiante de secundaria común y corriente con una fuerza sobrenatural impresionante. Después de un encuentro con maledictos, seres malvados que se alimentan de energía negativa, Yuji se ve involucrado en el mundo de la maldición.</p>

                        <div className="buttons">
                            <div className="single-icon">
                                <FaPlay className='icon-movie-inner play' size={22} onClick={handleClick}/>
                            </div>
                            <GrLike className='icon-movie-inner like' size={22}/>
                            <GrDislike className='icon-movie-inner dislike' size={22}/>
                            <FaRegHeart className='icon-movie-inner heart' size={22}/>
                        </div>
                    </section>
                </section>
            }
        </section>
    )
}
export { MovieSingle }