/* Javier Suárez Guzmán
    Agosto 2022 */

import React, { useState } from 'react';

function ListaDeTareas() {

  const [tarea, setTarea] = useState("");
  const [textoTarea, setTextoTarea] = useState([]);
  const [cambiarBoton, setCambiarBoton] = useState(false);
  const [editarIndice, setEditarIndice] = useState();

  const handleAdd = () => {
    if (tarea.length !== 0) {
      setTextoTarea(newTarea => [...newTarea, tarea]);
      setTarea("");
    }
  }

  const handleDelete = (index) => {
    textoTarea.splice(index, 1);
    setTextoTarea([...textoTarea]);
  }

  const handleEdit = (i) => {
    setTarea(textoTarea[i]);
    setCambiarBoton(true);
    setEditarIndice(i);
  }
  const handleUpdate = () => {
    textoTarea.splice(editarIndice, 1, tarea);
    setTextoTarea([...textoTarea]);
    setCambiarBoton(false);
    setTarea("");
  }

  return (
    <div>
      <div>Tareas</div>
      <input value={tarea} placeholder="Agrega una tarea" onChange={(e) => setTarea(e.target.value)} />
      {!cambiarBoton ? <button onClick={handleAdd}>Agregar</button> :
        <button onClick={handleUpdate}>Modificar</button>}

      {
        textoTarea.map((val, i) =>
          <div>
            {val} &nbsp;
            <button onClick={() => handleEdit(i)} >Editar</button>
            <button onClick={() => handleDelete(i)}>Eliminar</button>
          </div>
        )
      }
    </div>
  );
}

export default ListaDeTareas;