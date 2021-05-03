import React, { Fragment } from 'react'
import Navbar from './navbar/Navbar'
import Burger from './side-menu/Burger'
import SideMenu from './side-menu/SideMenu'

function Navigation() {
    return (
       <Fragment>
         <SideMenu/> 
           <Navbar/>
       </Fragment>
    )
}

export default Navigation
