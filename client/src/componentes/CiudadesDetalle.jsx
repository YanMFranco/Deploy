import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCiudadDetalle } from "../redux/action";
import '../css/CiudadesDetalle.css'
import DetalleActividad from "./DetalleActividad";

const CiudadesDetalle = (props) => {
    const dispatch = useDispatch();
    const countryDetalle = useSelector((state) => state.ciudadDetalle);

    useEffect(() => {
        dispatch(getCiudadDetalle(props.match.params.id));
    }, [dispatch, props.match.params.id]);

    console.log(countryDetalle.tourisms);

    return (

        <div className="contenedor-detalle">
            <h1>{countryDetalle.nombre}</h1>
            <h2><span className="titulos" >ID:</span> {countryDetalle.id}</h2>
            <img src={`${countryDetalle.imagen}`} alt={`Bandera de ${countryDetalle.name}`} />
            <h2><span className="titulos" >Continente:</span> {countryDetalle.continente}</h2>
            <h2><span className="titulos" >Subregion: </span>{countryDetalle.subregion}</h2>
            <h2><span className="titulos" >Capital: </span>{countryDetalle.capital}</h2>
            <h2><span className="titulos" >Area: </span>{countryDetalle.area}</h2>
            <h2><span className="titulos" >Poblacion: </span>{countryDetalle.poblacion}</h2>
            <h2><span className="titulos" >Actividades turisticas: </span>{
                countryDetalle.tourisms ?
                    countryDetalle.tourisms.length === 0 ? " No hay datos"
                        : countryDetalle.tourisms.map((info) => <DetalleActividad
                            key={info.id}
                            id={info.id}
                            nombre={info.nombre}
                            dificultad={info.dificultad}
                            duracion={info.duracion}
                            temporada={info.temporada}
                        />)
                    : "Cargando"}
            </h2>
        </div>
    )
}

export default (CiudadesDetalle);