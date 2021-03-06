import React from 'react'

function BtnNowPlaying(props) {
    const {icon, text, extraClass} = props

    return (
        <button className={`now-playing-btn row ${extraClass}`}>
            <img className="pl-3" src={icon} alt=""/>
            <p className="text-white my-auto pl-2">{text}</p>
        </button>
    )
}

export default BtnNowPlaying
