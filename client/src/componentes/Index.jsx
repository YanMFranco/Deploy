import React from "react";
import {Link} from "react-router-dom";
import '../css/Index.css';

export default function index(){
    return(
        <div className="principal">
            <div className="titulo"><h1>Bienvenido a mi Proyecto</h1></div>
            <div className="boton"><Link to="/Inicio"><button>Click para ingresar</button></Link></div>
        </div>
    ) 
}