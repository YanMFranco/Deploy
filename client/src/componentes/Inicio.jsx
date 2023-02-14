import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Ciudades from "./Ciudades";
import { getCiudades, orderFiltros , getPor_Nombre} from "../redux/action";
import '../css/Inicio.css';
import Ordenamiento from "./Ordenamiento";

const Inicio = () => {
    const dispatch = useDispatch();

    const [page, setPage] = useState(1);
    const [filtrarA_Z, setFiltrar] = useState('');
    const [filtrarP, setFiltrarP] = useState('');
    const [filtrarCo, setFiltrarCo] = useState('');

    const handleOrderAlphabetical = (value) => {
        setFiltrar(value);
    };

    const handleOrderPopulation = (value) => {
        setFiltrarP(value)
    }

    function handleOrderContinet(value) {
        setFiltrarCo(value)
    }

    let ciudadesBD = useSelector((state) => state.ciudadesBD);
    const paginaMaxima = useSelector((state) => state.ciudadesBD.paginadoMaximo);

    const nextHandler = () => {
        if (page === paginaMaxima) {
            alert("No puedes avanzar más")
        } else {
            setPage(page + 1)
        }
    }

    const prevHandler = () => {
        if (page === 1) {
            alert("No puedes retroceder más")
        } else {
            setPage(page - 1)
        }
    }

    const countrisRefresh = () => {
        setPage(1);
    }

    const [search, setSearch] = useState('');

    useEffect(() => {
        if (!search && !filtrarA_Z) {
            dispatch(getCiudades(page));
        }
        if (filtrarA_Z !== "" || filtrarP !== "" || filtrarCo !== "") {
            dispatch(orderFiltros(page, filtrarA_Z, filtrarP, filtrarCo));
        } else {
            dispatch(getPor_Nombre(page, search));
        }
    }, [dispatch, page, search, filtrarA_Z, filtrarP, filtrarCo]);

    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value)
    }


    return (
        <div className="contenedor-home">

            <div className="botones">
                <div><button onClick={prevHandler}>PREV</button></div>
                <div className="mundo" > <button type="submit" onClick={countrisRefresh}>🌍</button></div>
                <div><button onClick={nextHandler}>NEXT</button></div>
            </div>

            <div className="search">
                <input className="barra" type="text" onChange={handleChange} placeholder="Nombre del pais" />
            </div>

            <div><Ordenamiento onOrderAlphabetical={handleOrderAlphabetical} onOrderPoblacion={handleOrderPopulation} onOrderContinente={handleOrderContinet} /></div>

            <div className="datos">
                {!ciudadesBD.datos ? "esperar" : ciudadesBD.datos.map(
                    (ciudad) => <Ciudades
                        key={ciudad.id}
                        id={ciudad.id}
                        nombre={ciudad.nombre}
                        imagen={ciudad.imagen}
                        continente={ciudad.continente}
                    />
                )}
            </div>
        </div>
    )
}

export default Inicio;