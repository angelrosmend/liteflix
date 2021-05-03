import React from 'react'

function PopularMovie(props) {
    const {title, image} = props

    const styles = {
        backgroundImage: image,
        backgroundPosition: 'center',
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        objectFit: 'contain'
    }
    return (
        <li className="popular-movie-card m-1"
            style={styles}
            data-aos="fade-up" 
            data-aos-delay="170"
            >

        </li>
    )
}

export default PopularMovie
