import React, { Fragment, useState } from "react";
import Formulario from "./components/Formularios";

function App() {
  const [citas, guardarCitas] = useState([]);

  

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="one-half column">
          <Formulario />
        </div>
        <div className="one-half column"></div>
      </div>
    </Fragment>
  );
}

export default App;
