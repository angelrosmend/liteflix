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
       <li className="upcoming-movie-card m-1" 
           style={styles}
           data-aos="fade-up" 
           data-aos-delay="170"
           >

       </li>
    )
}

export default UpcomingMovie
