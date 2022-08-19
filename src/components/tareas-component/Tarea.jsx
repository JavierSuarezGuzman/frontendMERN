import React from 'react';


function Tarea({ id, texto, completada, completarTarea }) {
    return (
        <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
            <div
                className='tarea-texto'
                onClick={() => completarTarea(id)}>
                {texto}
            </div>
        </div>
    );
}

export default Tarea;