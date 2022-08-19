/* Javier Suárez Guzmán
    Agosto 2022 */

import React from 'react';

import Header from '../components/Header';
import Boleta from '../components/boleta-component/Boleta';
import Footer from '../components/Footer';

const Vendedor = () => {
    return (
        <div>
            <Header />
            Portal del Vendedor
            <Boleta />

            <Footer />
        </div>
    )
}

export default Vendedor;