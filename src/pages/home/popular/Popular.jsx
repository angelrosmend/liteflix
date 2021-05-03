import React from 'react'
import Subtitle from '../../../components/text/Subtitle'
import { useMovieList } from '../../../hooks/fetch-films/useMovieList'
import { image_url, popular_url } from '../../../settings/urls'
import PopularMovie from './PopularMovie'

function Popular() {
    const {movie_list} = useMovieList(popular_url)
    return (
        <div className="movie-list-container mb-5 "
             data-aos="fade-up" 
             data-aos-delay="170">
            <Subtitle>Polulares de liteflix</Subtitle>
            <ul className="movie-list-wrapper" >
                {movie_list && movie_list.map(item => {
                    const {id, poster_path, title} = item;
                    return <PopularMovie key={id}
                                         title={title} 
                                         image={`url(${image_url}${poster_path})`}/>
                })}
            </ul>
        </div>
    )
}

export default Popular
