import React from 'react'

function BtnNowPlaying(props) {
    const {icon, text} = props
    return (
        <button className="now-playing-btn row">
            <img className="pl-2" src={icon} alt=""/>
            <p className="text-white my-auto pl-2">{text}</p>
        </button>
    )
}

export default BtnNowPlaying
