import React from 'react'

function UpcomingMovie(props) {
    const {image, title} = props

    const styles = {
        backgroundImage: image,
        backgroundPosition: 'center',
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        objectFit: 'contain'
    }
    return (
       <li className="upcoming-movie-card" 
           style={styles}>

       </li>
    )
}

export default UpcomingMovie
