import React from 'react'
import { plus } from '../../../assets/img'

function BtnAdd() {
    return (
        <button className="btn-add-sidemenu mx-auto mt-1 mb-3">
           
            <img src={plus} alt=""/>
            <p className="sidemenu-link my-auto ml-2">Agregar película</p>
        </button>
    )
}

export default BtnAdd
