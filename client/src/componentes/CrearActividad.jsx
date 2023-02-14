import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';

//import { crear_Actividad } from '../redux/action';
import "../css/CrearActividad.css";
import { getTodo, crear_Actividad } from '../redux/action';
import estrella from '../css/img/estrella2.png';

const CrearActividad = () => {

    const dispatch = useDispatch();

    let todo = useSelector((state) => state.todo);

    useEffect(() => {
        dispatch(getTodo());
    }, [dispatch]);

    const [rating, setRating] = useState(0);
    const [idPais, setID] = useState("");

    const [input, setInput] = useState({
        "id": [],
        "nombre": "",
        "dificultad": "",
        "duracion": "",
        "temporada": "",

    })

    const changeHandler = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    const changeHandlerID = (e) => {
        setID(e.target.value)
    };

    const agregarID = (e) => {
        e.preventDefault();
        if (idPais === "") {
            alert("Seleccione Pais")
        } else {
            const nuevoID = [...input.id, idPais];
            setInput({ ...input, id: nuevoID });
            alert("Pais agregado con exito");
        }
    };

    const submitHandler = (evento) => {
        evento.preventDefault();
        if (input.id.length===0 || input.nombre==="" || input.duracion==="" || input.dificultad===0 || input.temporada==="" ) {
            return alert("Todos los campos son requeridos")
        }
        dispatch(crear_Actividad({ input }));
        console.log(input.id);
        alert('Actividad creada correctamente');
        setInput({
            "id": [],
            "nombre": "",
            "dificultad": "",
            "duracion": "",
            "temporada": "",

        });
    };

    console.log(input);

    return (
        <div className='crear-actividad'>
            <div>
                <h1>Crear actividad turistica</h1>
            </div>
            <div className='contenedor-form'>
                <form>
                    <div>
                        <label htmlFor="id">ID del país</label>
                        <select className="id" name="id" onChange={e => changeHandlerID(e)}>
                            <option name="id" value="">--Seleccione--</option>
                            {
                                todo.map(
                                    (ciudad)=><option name="id" value={ciudad.id}>{ciudad.nombre}</option>
                                )
                            }
                        </select> <button type="submit" onClick={agregarID}>+</button>
                        <br />
                    </div>
                    <div>
                        <label htmlFor="nombre">Nombre de actividad</label>
                        <input type='text' value={input.nombre} name='nombre' onChange={e => changeHandler(e)} /><br />
                    </div>
                    <div>
                        <label className="dificultad" htmlFor="dificultad">Dificultad</label>
                        {[1, 2, 3, 4, 5].map(index => (
                            <img
                                key={index}
                                src={estrella}
                                alt="dificultad"
                                onClick={() => {
                                    setRating(index);
                                    setInput({ ...input, dificultad: index });
                                }}
                                style={{
                                    filter:
                                        rating >= index ? 'grayscale(0%)' : 'grayscale(100%)',
                                    transition: 'filter 0.3s ease-in-out',
                                    cursor: 'pointer',
                                }}
                            />
                        ))}
                        <br />
                    </div>
                    <div>
                        <label htmlFor="duracion">Duracion</label>
                        <input className="duracion" type='number' value={input.duracion} name='duracion' onChange={e => changeHandler(e)} /><br />
                    </div>
                    <label htmlFor="temporada">Epoca del año</label>
                    <select className="temporada" name="temporada" value={input.temporada} onChange={e => changeHandler(e)}>
                        <option name="temporada" value="">--Seleccione--</option>
                        <option name="temporada" value="primavera">Primavera</option>
                        <option name="temporada" value="verano">Verano</option>
                        <option name="temporada" value="otoño">Otoño</option>
                        <option name="temporada" value="invierno">Invierno</option>
                    </select>
                    <br />
                    <div className='boton'>
                        <button type="submit" className='hola' onClick={submitHandler}>SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CrearActividad;