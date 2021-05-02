import { useEffect, useState } from "react";
import axios from "axios"
import { randomIndex } from "../../helpers/pickRandomIndex";


export function useNowPlayingMovie(url){
    const [state, setState] = useState({now_playing_data: {},
                                        loading: true,
                                        })
    useEffect(()=> {
        axios.get(url)
             .then(response =>{
                   let movie_data = response.data.results[2]
                   console.log(response.data.results)
                   setState({
                       now_playing_data: movie_data,
                       loading: false
                   })
             })
             .catch(error =>{
                 setState({
                     now_playing_data: {},
                     loading: false,
                 })
             })
    },[url])

    return state
}