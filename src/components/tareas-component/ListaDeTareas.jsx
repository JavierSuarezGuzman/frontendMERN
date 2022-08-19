/* Javier Suárez Guzmán
    Agosto 2022 */

import React, { useState } from 'react';

function ListaDeTareas() {

  const [name, setName] = useState("");
  const [allData, setAllData] = useState([]);
  const [show, setShow] = useState(false);
  const [editIndex, setEditIndex] = useState();

  const handleAdd = () => {
    if (name.length !== 0) {
      setAllData(newData => [...newData, name]);
      setName("");
    }
  }

  const handleDelete = (index) => {
    allData.splice(index, 1);
    setAllData([...allData]);
  }

  const handleEdit = (i) => {
    setName(allData[i]);
    setShow(true);
    setEditIndex(i);
  }
  const handleUpdate = () => {
    allData.splice(editIndex, 1, name);
    setAllData([...allData]);
    setShow(false);
    setName("");
  }

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      {!show ? <button onClick={handleAdd}>Agregar</button> :
        <button onClick={handleUpdate}>Modificar</button>}

      {
        allData.map((val, i) =>
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