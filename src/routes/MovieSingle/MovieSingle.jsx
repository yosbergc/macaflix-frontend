import './moviesingle.css'
import { IoMdCloseCircle } from "react-icons/io";
import { YouTubeEmbed } from '../../components/Dashboard/YouTubeEmbed/YouTubeEmbed'
import { FaPlay } from "react-icons/fa";
import { GrLike } from "react-icons/gr";
import { GrDislike } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { getSingleMovie } from '../../services/getSingleMovie'
import { userContext } from '../../context/userContext'
import { Navigate } from 'react-router-dom';
function MovieSingle() {
    const [movie, setMovie] = useState(null)
    const { id } = useParams()
    const { user } = useContext(userContext)
    const navigate = useNavigate()
    function handleBack() {
        navigate('/dashboard')
    }
    function handleClick(event) {
        event.stopPropagation()
    }
    useEffect(() => {
        getSingleMovie(id, user.token)
        .then(data => setMovie(data))
        .catch(error => {
            handleBack()
        })

        return () => {
            setMovie(null)
        }
    }, [id])
    
    return (
        <section className="movie-overview-single" onClick={handleBack}>
            <section className="movie-overview-single-inner" onClick={handleClick}>
                <section className="movie-video">
                    <IoMdCloseCircle size={25} color='white' className='closeBtn' onClick={handleBack}/>
                    <YouTubeEmbed embedId={movie?.trailerLink} />
                </section>
                <section className="movie-overview-single-inner-information">
                    <section className="innerfirst">
                        <h3>{movie?.title}</h3>
                        <p className='description'>{movie?.descripcion}</p>
                        <div className="buttons">
                                <div className="single-icon">
                                    <FaPlay className='icon-movie-inner play' size={22}/>
                                </div>
                                <GrLike className='icon-movie-inner like' size={22}/>
                                <GrDislike className='icon-movie-inner dislike' size={22}/>
                                <FaRegHeart className='icon-movie-inner heart' size={22}/>
                        </div>
                    </section>
                    <section className="innersecond">
                        <section className="feature">
                            <strong>Duración:</strong>
                            <p>{movie?.duracion}</p>
                        </section>
                        <section className="feature">
                            <strong>Apto para:</strong>
                            <p className='age'>{movie?.edadMinima}</p>
                        </section>
                        <section className="feature">
                            <strong>Director:</strong>
                            <p>{movie?.director}</p>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    )
}

export { MovieSingle }