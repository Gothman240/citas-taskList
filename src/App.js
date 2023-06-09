import React, { Fragment, useState } from "react";
import Formulario from "./components/Formularios";
import Cita from "./components/Cita";

function App() {
  const [citas, guardarCitas] = useState([]);

  const crearCita = cita =>{
    guardarCitas([
      ...citas,
      cita
    ])
  }

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="one-half column">
          <Formulario
          crearCita={crearCita}
          />
        </div>
        <div className="one-half column">
          <h2>Administra tus citas</h2>
          {citas.map(cita =>(
            <Cita
              key={cita.id}
              cita={cita}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
