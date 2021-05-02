import React from 'react'
import Subtitle from '../../../components/text/Subtitle'
import { useMovieList } from '../../../hooks/fetch-films/useMovieList'
import { image_url, upcoming_url } from '../../../settings/urls'
import UpcomingMovie from './UpcomingMovie'
import "./upcoming.css"

function Upcoming() {
    const {movie_list} = useMovieList(upcoming_url)
    console.log(movie_list)
    return (
        <div className="movie-list-container h-170">
            <div className="overflow-up">
            <Subtitle>Próximamente</Subtitle>
            <ul className="movie-list-wrapper">

                {movie_list && movie_list.map(item =>{
                    const {id, poster_path, backdrop_path, title} = item
                    return <UpcomingMovie key={id} 
                                          image={`url(${image_url}${backdrop_path})`}
                                          title={title}/>
                })  
                }
            </ul>
            </div>
        </div>
    )
}

export default Upcoming
