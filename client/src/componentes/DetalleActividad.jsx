import React from "react";
import '../css/DetalleActividad.css';

const DetalleActividad = ({ id, nombre, dificultad, duracion, temporada, }) => {
    return (
        <div className="detalleA">
            <div>
                <ul>
                    <h3><span>Nombre de actividad: {nombre} </span></h3>
                    <li><h3>Dificultad: <span>{dificultad}</span></h3></li>
                    <li><h3>Duracion: <span>{duracion}</span></h3></li>
                    <li><h3>Temporada: <span>{temporada}</span></h3></li>
                    
                </ul>
                
            </div>
        </div>
    )
}

export default DetalleActividad;