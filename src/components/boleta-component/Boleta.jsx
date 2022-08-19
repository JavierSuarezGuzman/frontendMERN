/* Javier Suárez Guzmán
    Agosto 2022 */

import React, { useRef } from 'react';
import { useReactToPrint } from "react-to-print";

const Boleta = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    return (
        <>
            <div ref={componentRef}>
                <div>Boleta</div>
                <div>Nro. Boleta</div>
                <input type="number"></input>
                <div>Precio</div>
                <input type="number"></input>
            </div>
            <div>
                <button onClick={handlePrint}>imprimir</button>
            </div>
        </>
    )
}

export default Boleta;