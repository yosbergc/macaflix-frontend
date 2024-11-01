import './moviesingle.css'
import { IoMdCloseCircle } from "react-icons/io";
import { YouTubeEmbed } from '../../components/Dashboard/YouTubeEmbed/YouTubeEmbed'
import { FaPlay } from "react-icons/fa";
import { GrLike } from "react-icons/gr";
import { GrDislike } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
function MovieSingle() {
    const navigate = useNavigate()

    function handleBack() {
        navigate('/dashboard')
    }
    function handleClick(event) {
        event.stopPropagation()
    }
    return (
        <section className="movie-overview-single" onClick={handleBack}>
            <section className="movie-overview-single-inner" onClick={handleClick}>
                <section className="movie-video">
                    <IoMdCloseCircle size={25} color='white' className='closeBtn' onClick={handleBack}/>
                    <YouTubeEmbed embedId="Xt10lLr24ZE" />
                </section>
                <section className="movie-overview-single-inner-information">
                    <section className="innerfirst">
                        <h3>Jujutsu Kaisen</h3>
                        <p className='description'>Un estudiante de secundaria común y corriente con una fuerza sobrenatural impresionante. Después de un encuentro con maledictos, seres malvados que se alimentan de energía negativa, Yuji se ve involucrado en el mundo de la maldición.</p>
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
                        <strong>Duración:</strong>
                        <p>1h 47m</p>
                    </section>
                </section>
            </section>
        </section>
    )
}

export { MovieSingle }