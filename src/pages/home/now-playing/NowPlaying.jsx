import React from 'react'
import { play, plus } from '../../../assets/img'
import { useNowPlayingMovie } from '../../../hooks/fetch-films/useNowPlayingMovie'
import { image_url, now_playing_url } from '../../../settings/urls'
import "../home.css"
import "../now-playing/nowPlaying.css"
import BtnNowPlaying from './BtnNowPlaying'

function NowPlaying() {
    const {now_playing_data} = useNowPlayingMovie(now_playing_url)

    const {backdrop_path, title, overview} = now_playing_data
    console.log(now_playing_data)

    const stylesImgBg = {
                        backgroundImage: `url(${image_url}${backdrop_path})`,
                        backgroundPosition: 'center',
                        backgroundSize: "cover",
                        backgroundRepeat: 'no-repeat',
                        objectFit: 'contain'
                       
                       }

    return (
        <div className="header-now-playing-img" 
             style={stylesImgBg}>
            <div className="now-playing-description-wrapper ">
                <div className="now-playing-description-container"
                      data-aos="fade-right" 
                      data-aos-delay="700">
                    <div className="now-playing-description-box ">
                        <h3 className="original-de-liteflix">
                            Original de Liteflix
                        </h3>
                        <h1 className="now-playing-title">{title}</h1>
                        <div className="now-playing-btns-wrapper px-3 my-3">
                            <BtnNowPlaying icon={play} text="Repoducir"/>
                            <BtnNowPlaying icon={plus} text="Mi lista"/>
                        </div>
                        <article className="description-now-playing-wrapper ">
                            <h4>Ver pelicula</h4>
                            <p>{overview && overview.slice(0, 250)}</p>
                        </article>

                    </div>
                    <div className="now-playing-description-box ">
                        {/* empty space */}
                    </div>


                </div>
            </div>
        </div>
    )
}

export default NowPlaying
