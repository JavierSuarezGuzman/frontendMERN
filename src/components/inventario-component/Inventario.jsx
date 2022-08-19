/* Javier Suárez Guzmán
    Agosto 2022 */

import React, { useState } from 'react';

function Inventario() {

    const [producto, setProducto] = useState("");
    const [textoProducto, setTextoProducto] = useState([]);
    const [cambiarBoton, setCambiarBoton] = useState(false);
    const [editarIndice, setEditarIndice] = useState();

    const handleAdd = () => {
        if (producto.length !== 0) {
            setTextoProducto(newData => [...newData, producto]);
            setProducto("");
        }
    }

    const handleDelete = (index) => {
        textoProducto.splice(index, 1);
        setTextoProducto([...textoProducto]);
    }

    const handleEdit = (i) => {
        setProducto(textoProducto[i]);
        setCambiarBoton(true);
        setEditarIndice(i);
    }
    const handleUpdate = () => {
        textoProducto.splice(editarIndice, 1, producto);
        setTextoProducto([...textoProducto]);
        setCambiarBoton(false);
        setProducto("");
    }

    return (
        <div>
            <div>Vista de inventario</div>
            <input value={producto} onChange={(e) => setProducto(e.target.value)} />
            {!cambiarBoton ? <button onClick={handleAdd}>Agregar</button> :
                <button onClick={handleUpdate}>Modificar</button>}

            {
                textoProducto.map((val, i) =>
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

export default Inventario;