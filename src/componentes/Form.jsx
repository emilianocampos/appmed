import React from "react";

const Form = ({ handleChange, añadirTarea, tarea }) => {
    return (
        <div>
            <form onSubmit={añadirTarea}>

                <button type="submit">add</button>
                <input type="text" value={tarea} onChange={handleChange} />
            </form>
        </div>
    );
};

export { Form };
