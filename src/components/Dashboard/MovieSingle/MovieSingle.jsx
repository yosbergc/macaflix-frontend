import './moviesingle.css'
import { useState } from 'react'
import { FaPlay } from "react-icons/fa";
import { GrLike } from "react-icons/gr";
import { GrDislike } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
function MovieSingle({ titulo, descripcion, duracion, imageSource, id }) {
    const [showMovieInfo, setShowMovieInfo] = useState(false)
    const navigate = useNavigate()
    function handleClick() {
        navigate(`/dashboard/m/${id}`)
        setShowMovieInfo(false)
    }
    return (
        <section className="movie-single-container">
            <section className="movie-show" onMouseEnter={() => {
                setShowMovieInfo(true)
            }}>
                <img src={imageSource} alt="Jujutsu Kaisen" onClick={handleClick}/>
            </section>
            {
                showMovieInfo && <section className="movie-inner" onMouseLeave={() => setShowMovieInfo(false)}>
                    <img src={imageSource} alt="Jujutsu Kaisen" onClick={handleClick}/>
                    <section className="movie-inner-content">
                        <h3>{titulo}</h3>
                        <p className="small-duration">{duracion}</p>
                        <p>{descripcion}</p>

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