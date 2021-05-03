import React, { Fragment, useState } from 'react'
import { logo_liteflix } from '../../../assets/img'
import "./sidemenu.css"

function Burger({toggle}) {

    const [clicked, setClicked] = useState(false)
    const stylesBurger = {transform: `rotate(${clicked ? "180deg": "0deg"}) translateX(0px)`}

    const handleToggle = () => {
        setClicked(!clicked)
        toggle()

    }
    return (
        <div className="toggler-wrapper">
            <div className="custom-burger d-none-lg"
             onClick={handleToggle}
             style={stylesBurger}>
              
            <div className="burger-wrapper">
              <div className="toggler"/>
              <div className="toggler"/>
              <div className="toggler"/> 
            </div>        
            </div>
            <img className={` d-none-lg pt-2 ${clicked ? "logo-toggler active" : "logo-toggler"}`} src={logo_liteflix} alt=""/>
        </div>
       
        
        
    )
}

export default Burger
