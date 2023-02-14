import React from "react";
import {Link} from 'react-router-dom';
import '../css/Ciudades.css'

const Ciudades = ({ id,nombre, imagen , continente }) => {
    return (
        <div className="contenedor-card">
                <Link to={`/Ciudad/${id}`}><img src={imagen} alt="Img Not Found" /></Link>
                <div className="nombre">
                <h1>{nombre}</h1>
                <h2><span className="continente">Continente:</span> {continente}</h2>
                </div>
        </div>
    )
}

export default Ciudades;