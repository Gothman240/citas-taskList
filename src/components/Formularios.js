import React, { Fragment, useState } from "react";
import uuid from 'uuid/v4';

const Formulario = () => {

    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',

    });

    const [error, actualizarError] = useState(false)

    const actualizarState = evento =>{
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        }) 
    }

    const {mascota, propietario, fecha, hora, sintomas} = cita;


    const submitCita = e => {
        e.preventDefault();
        //validar
        if (mascota.trim()==='' || propietario.trim()==='' || fecha.trim()===''
         || hora.trim()==='' || sintomas.trim()==='') {
            actualizarError(true);
            return;    
        }
        //elliminar el error si pasa el if
        actualizarError(false);
        //asignar un ID(con una bdd lo genera solo, pero estoy en local)npm i uuid
        cita.id=uuid;
        //crear la cita
        

    }

    return (
        <Fragment>
            <h2>Crear Cita</h2>
            {error 
            ? <p className="alerta-error">Todos los campos son obligatorios</p> 
            :null}
            <form
                onSubmit={submitCita}
            >
            <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre mascota"
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre del dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre dueño de la mascota"
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>
                <button
                    type="button"
                    className="u-full-width button-primary"    
                ></button>
            </form>
        </Fragment>
    );
}

export default Formulario;