import React from 'react'
import { userIcon } from '../../../assets/img'

function BtnUser() {
    return (
        <button className="btn-user mx-auto mt-5">
            <span className="user-oval ml-2">
                <img src={userIcon} alt=""/>
                
            </span>
            <p className="my-auto ml-2">Angel Rosales</p>
        </button>
    )
}

export default BtnUser
