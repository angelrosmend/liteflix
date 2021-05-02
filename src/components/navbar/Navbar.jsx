import React from 'react'
import { logo_liteflix, bell,  user, plus, arrow } from '../../assets/img'
import "./navbar.css"

function Navbar() {
    return (
        <nav>
            <div className="navigation-container">
                <div className="nav-box-wrapper ">
                <ul className="nav-box-1">
                    <li className="logo">
                        <img src={logo_liteflix} alt=""/>
                    </li>
                    <li className="custom-nav-link">Inicio</li>
                    <li className="custom-nav-link">Series</li>
                    <li className="custom-nav-link">Peliculas</li>
                    <li className="custom-nav-link">Agregados recientemente</li>
                    <li className="custom-nav-link">Mi lista</li>
                </ul>
                </div>
                <div className="nav-box-2 ">
                    <div className="nav-box-wrapper">
                        <ul className="nav-box-2">
                            <li className=" add-btn pl-3">
                                <button>
                                    <img src={plus} alt=""/> 
                                </button></li>
                            <li className="custom-nav-link pl-3">Niños</li>
                            <li className="pl-2">
                                <img src={bell} alt=""/>
                            </li>
                            <li className="pl-3 d-flex">
                                <img  src={user} alt=""/>
                                <img className=" my-auto pl-2" src={arrow} alt=""/>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
