/* Javier Suárez Guzmán
    Agosto 2022 */

import React, { useRef } from 'react';
import { useReactToPrint } from "react-to-print"; //paquete para poder imprimir en React https://github.com/gregnb/react-to-print

const Boleta = () => {
    const componenteAImprimir = useRef();

    const handlePrint = useReactToPrint({
        content: () => componenteAImprimir.current,
    });

    return (
        <>
            <div ref={componenteAImprimir}>
                <div>Boleta</div>
                <div>Nro. Boleta</div>
                <input type="number"></input>
                <div>Total</div>
                <input type="number"></input>
            </div>
            <div>
                <button onClick={handlePrint}>imprimir</button>
            </div>
        </>
    );
}

export default Boleta;