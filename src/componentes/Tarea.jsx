import React, { useState } from "react";
import '../Task.css'


const Tarea = ({ tarea, borrarTarea }) => {

    const [completado, setCompletada] = useState(false);

    return (

        <div className={completado ? 'containerTarea containerTareaCompletada' : 'containerTarea'}>
            <h2 className={completado ? 'completada' : 'noCompletada'}>{tarea.tarea}</h2>
            <button id='completar' onClick={() => setCompletada(!completado)}>{completado ? 'No completada' : 'Completada'}</button>
            <button onClick={() => borrarTarea(tarea.id)} id="eliminar">Eliminar</button>
        </div>


    )



}

export { Tarea };