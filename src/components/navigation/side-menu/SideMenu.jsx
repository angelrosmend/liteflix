import React, { Fragment, useState } from 'react'
import { bell } from '../../../assets/img'
import BtnAdd from './BtnAdd'
import BtnUser from './BtnUser'
import Burger from './Burger'
import "./sidemenu.css"

function SideMenu() {
    const [showMenu, setShowMenu] = useState(false)
    const toggle = () => setShowMenu(!showMenu)
    return (
        <Fragment>
            <Burger toggle={toggle}/>
            <nav className={ showMenu ? "sidemenu active" : "sidemenu"}>
            <ul className="sidemenu-content-account-wrapper">
                <BtnUser/>
                <li className=" mt-4">
                    <p>Cambiar Usuario</p>
                </li>
                <li className="mt-2">
                    <p>Configuración</p>
                </li>
                <li className=" mt-2">
                    <p>Ayuda</p>
                </li>
            </ul>
            <ul className="sidemenu-content-link-wrapper">
                <li className="sidemenu-link row">
                    <img  className="my-auto ml-3" src={bell} alt=""/>
                    <p className="ml-2 my-auto py-2">Novedades</p>
                </li>
                <li className="sidemenu-link">
                    <p>Series</p>
                </li>
                <li className="sidemenu-link">
                    <p>Peliculas</p>
                </li>
                <li className="sidemenu-link">
                    <p>Mi lista</p>
                </li>
                <li className="sidemenu-link">
                    <p>Niños</p>
                </li>
                <li>
                    <BtnAdd/>
                </li>
                <li className="sidemenu-link">
                    <p>Logout</p>
                </li>
            </ul>

            </nav>
        </Fragment>
        
    )
}

export default SideMenu
