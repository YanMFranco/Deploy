import React from "react";
import '../css/Ordenamiento.css';
//import { orderAlphabetical, orderP , orderContinet } from "../redux/action";

const Ordenamiento = ({ onOrderAlphabetical , onOrderPoblacion , onOrderContinente}) => {

    return (
        <div className="ordenamiento">
            <span ><h2>Orden Alfabetico </h2></span>
            <select className="" onChange={(e) => onOrderAlphabetical(e.target.value)}>
                <option value="">---Aleatorio---</option>
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
            </select>


            <span><h2>Poblacion </h2></span>
            <select onChange={(e) => onOrderPoblacion(e.target.value)}>
                <option value="">---Aleatorio---</option>
                <option value="desc">Mayor poblacion</option>
                <option value="asc">Menor poblacion</option>
            </select>

            <span><h2>Continente </h2></span>
            <select onChange={(e)=> onOrderContinente(e.target.value)}>
                <option value="">---Aleatorio---</option>
                <option value='todos'>Todos los continentes</option>
                <option value='Africa'>Africa</option>
                <option value='Antarctica'>Antarctica</option>
                <option value='Asia'>Asia</option>
                <option value='Europe'>Europe</option>
                <option value='North America'>North America</option>
                <option value='Oceania' >Oceania</option>
                <option value='South America'>South America</option>
            </select>
        </div>
    )

};

export default Ordenamiento;