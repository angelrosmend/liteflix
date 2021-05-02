import React from 'react'
import "./text.css"

function Subtitle(props) {
    return (
        <h2 className="liteflix-subtitle">
            {props.children}
        </h2>
    )
}

export default Subtitle
