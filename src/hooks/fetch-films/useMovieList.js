import { useEffect, useState } from "react";
import axios from "axios"
import { randomIndex } from "../../helpers/pickRandomIndex";


export function useMovieList(url){
    const [state, setState] = useState({movie_list: [],
                                        loading: true,
                                        })
    useEffect(()=> {
        axios.get(url)
             .then(response =>{
                   let movie_data = response.data.results.slice(0, 4) //[randomIndex()]

                   setState({
                       movie_list: movie_data,
                       loading: false
                   })
             })
             .catch(error =>{
                 setState({
                     now_playing_data: [],
                     loading: false,
                 })
             })
    },[url])

    return state
}