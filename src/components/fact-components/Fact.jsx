/* Javier Suárez Guzmán
    Agosto 2022 */

import React from 'react';

const Fact = () => {
    return (
        <>
            {/* <div>Factura</div> */}
            <div>Nombre Producto</div>
            <input type="text"></input>
            <div>Precio</div>
            <input type="number"></input>
            <div>Cantidad</div>
            <input type="number"></input>
            <div>
                <button>Agregar a inventario</button>
            </div>
        </>
    )
}

export default Fact;