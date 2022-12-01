import React from "react";
import { useState } from "react";
import {ImLinkedin} from "react-icons/im";
import {ImTwitter} from "react-icons/im";
import {ImGithub} from "react-icons/im"
import {ImMenu} from "react-icons/im"
import { Link } from "react-router-dom";
import {ImHome} from "react-icons/im"
import './Navbar.css'


export const Navbar = () => {

    //Visibilidad del Navbar al picar el boton de hamburguesa
    const [visibility, setVisibility] = useState(false)

    const visibleTrue = visibility


    //funcion onClick
    const visibilityFalse = () => {
        setVisibility(!visibility)
    }

    return (
        <>
        
        <nav className="Navbar-container">

            

            <div className="Navbar-menu" 
            onClick={visibilityFalse}>
                <ImMenu/>
            </div>

            <Link to='/todo-machine'>
            <div className={`Navbar-home ${visibleTrue && 'Navbar-menu--active'}`}><ImHome/></div>
            </Link>

            <a href="https://github.com/Azzzako" target="_blank" rel="noreferrer">
            <div className={`Navbar-git ${visibleTrue && 'Navbar-menu--active'}`}><ImGithub/></div></a>


            <a href="https://www.linkedin.com/in/asael-hernandez-29a279241/" target="_blank" rel="noreferrer">
            <div className={`Navbar-linkedin ${visibleTrue && 'Navbar-menu--active'}`}><ImLinkedin/></div></a>


            <a href="https://twitter.com/AzakRG" target="_blank" rel="noreferrer">
            <div className={`Navbar-twitter ${visibleTrue && 'Navbar-menu--active'}`}><ImTwitter/></div></a>


            <Link to={'/about'}>
            <h1 className={`Navbar-about ${visibleTrue && 'Navbar-menu--active'}`}> About</h1>
            </Link>
           
        </nav>

        </>
    )
}
