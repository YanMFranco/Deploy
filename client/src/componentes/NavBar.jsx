import React from "react";
import { Link } from 'react-router-dom';
import "../css/navBar.css";

const NavBar = ({ location }) => {
    if (location.pathname === "/Bienvenido") {
        return null;
    }

    return (
        <div className="nav-bar">
            <nav><ul>
                <li><Link to={"/Inicio"}>Inicio</Link></li>
                <li><Link to={"/CrearActividad"}>Crear Actividad</Link></li>
                <li><Link to={"/Bienvenido"}>Salir</Link></li>
            </ul></nav>
        </div>
    )
};

export default (NavBar);